import BitStream from './bit-stream';

export type SPS = {
    profile_idc: number;
    constraint_set_flags: number;
    level_idc: number;
    seq_parameter_set_id: number;
    pic_width_in_mbs_minus1: number;
    pic_height_in_map_units_minus1: number;
    frame_mbs_only_flag: number;
    frame_crop_left_offset: number;
    frame_crop_right_offset: number;
    frame_crop_top_offset: number;
    frame_crop_bottom_offset: number;
    sar: [number, number];
};

export default class H264Parser {
    /**
     * Advance the ExpGolomb decoder past a scaling list. The scaling
     * list is optionally transmitted as part of a sequence parameter
     * set and is not relevant to transmuxing.
     * @param decoder {BitStream} exp golomb decoder
     * @param count {number} the number of entries in this scaling list
     * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
     */
    private static skipScalingList(decoder: BitStream, count: number): void {
        let lastScale = 8;
        let nextScale = 8;
        for (let j = 0; j < count; j++) {
            if (nextScale !== 0) {
                const deltaScale = decoder.readEG();
                nextScale = (lastScale + deltaScale + 256) % 256;
            }
            lastScale = (nextScale === 0) ? lastScale : nextScale;
        }
    }

    public static parseNALUType(messageData: Uint8Array) {
      const headerByte = messageData[4];
      const naluType = headerByte & 0x1F;
      return naluType;
    }

    /**
     * Read a sequence parameter set and return some interesting video
     * properties. A sequence parameter set is the H264 metadata that
     * describes the properties of upcoming video frames.
     * @param data {Uint8Array} the bytes of a sequence parameter set
     * @return {object} an object with configuration parsed from the
     * sequence parameter set, including the dimensions of the
     * associated video frames.
     */
    public static readSPS(data: Uint8Array): { width: number; height: number; } {
        const {
            pic_width_in_mbs_minus1,
            frame_crop_left_offset,
            frame_crop_right_offset,
            frame_mbs_only_flag,
            pic_height_in_map_units_minus1,
            frame_crop_top_offset,
            frame_crop_bottom_offset,
            sar
        } = this.parseSPS(data);

        const sarScale = sar[0] / sar[1];
        return {
            width: Math.ceil((((pic_width_in_mbs_minus1 + 1) * 16) - frame_crop_left_offset * 2 - frame_crop_right_offset * 2) * sarScale),
            height: ((2 - frame_mbs_only_flag) * (pic_height_in_map_units_minus1 + 1) * 16) -
                ((frame_mbs_only_flag ? 2 : 4) * (frame_crop_top_offset + frame_crop_bottom_offset)),
        }
    }

    public static parseSPS(data: Uint8Array): SPS {
        const decoder = new BitStream(data);
        let frame_crop_left_offset = 0;
        let frame_crop_right_offset = 0;
        let frame_crop_top_offset = 0;
        let frame_crop_bottom_offset = 0;
        decoder.readUByte();

        const profile_idc = decoder.readUByte();
        const constraint_set_flags = decoder.readUByte(); // constraint_set[0-5]_flag + reserved_zero_2bits u(2),
        const level_idc = decoder.readBits(8); // level_idc u(8)
        const seq_parameter_set_id = decoder.readUEG(); // seq_parameter_set_id
        // some profiles have more optional data we don't need
        if (profile_idc === 100 ||
            profile_idc === 110 ||
            profile_idc === 122 ||
            profile_idc === 244 ||
            profile_idc === 44 ||
            profile_idc === 83 ||
            profile_idc === 86 ||
            profile_idc === 118 ||
            profile_idc === 128 ||
            profile_idc === 138 ||
            profile_idc === 139 ||
            profile_idc === 134) {
            const chromaFormatIdc = decoder.readUEG();
            if (chromaFormatIdc === 3) {
                decoder.skipBits(1); // separate_colour_plane_flag
            }
            decoder.skipUEG(); // bit_depth_luma_minus8
            decoder.skipUEG(); // bit_depth_chroma_minus8
            decoder.skipBits(1); // qpprime_y_zero_transform_bypass_flag
            if (decoder.readBoolean()) { // seq_scaling_matrix_present_flag
                const scalingListCount = (chromaFormatIdc !== 3) ? 8 : 12;
                for (let i = 0; i < scalingListCount; ++i) {
                    if (decoder.readBoolean()) { // seq_scaling_list_present_flag[ i ]
                        if (i < 6) {
                            H264Parser.skipScalingList(decoder, 16);
                        } else {
                            H264Parser.skipScalingList(decoder, 64);
                        }
                    }
                }
            }
        }
        decoder.skipUEG(); // log2_max_frame_num_minus4
        const picOrderCntType = decoder.readUEG();
        if (picOrderCntType === 0) {
            decoder.readUEG(); // log2_max_pic_order_cnt_lsb_minus4
        } else if (picOrderCntType === 1) {
            decoder.skipBits(1); // delta_pic_order_always_zero_flag
            decoder.skipEG(); // offset_for_non_ref_pic
            decoder.skipEG(); // offset_for_top_to_bottom_field
            const numRefFramesInPicOrderCntCycle = decoder.readUEG();
            for (let i = 0; i < numRefFramesInPicOrderCntCycle; ++i) {
                decoder.skipEG(); // offset_for_ref_frame[ i ]
            }
        }
        decoder.skipUEG(); // max_num_ref_frames
        decoder.skipBits(1); // gaps_in_frame_num_value_allowed_flag
        const pic_width_in_mbs_minus1 = decoder.readUEG();
        const pic_height_in_map_units_minus1 = decoder.readUEG();
        const frame_mbs_only_flag = decoder.readBits(1);
        if (frame_mbs_only_flag === 0) {
            decoder.skipBits(1); // mb_adaptive_frame_field_flag
        }
        decoder.skipBits(1); // direct_8x8_inference_flag
        if (decoder.readBoolean()) { // frame_cropping_flag
            frame_crop_left_offset = decoder.readUEG();
            frame_crop_right_offset = decoder.readUEG();
            frame_crop_top_offset = decoder.readUEG();
            frame_crop_bottom_offset = decoder.readUEG();
        }
        const vui_parameters_present_flag = decoder.readBoolean();
        let aspect_ratio_info_present_flag = false;
        let sar: [number, number] = [1, 1];
        if (vui_parameters_present_flag) {
            aspect_ratio_info_present_flag = decoder.readBoolean();
            if (aspect_ratio_info_present_flag) {
                const aspectRatioIdc = decoder.readUByte();
                switch (aspectRatioIdc) {
                    case 1: sar = [1, 1]; break;
                    case 2: sar = [12, 11]; break;
                    case 3: sar = [10, 11]; break;
                    case 4: sar = [16, 11]; break;
                    case 5: sar = [40, 33]; break;
                    case 6: sar = [24, 11]; break;
                    case 7: sar = [20, 11]; break;
                    case 8: sar = [32, 11]; break;
                    case 9: sar = [80, 33]; break;
                    case 10: sar = [18, 11]; break;
                    case 11: sar = [15, 11]; break;
                    case 12: sar = [64, 33]; break;
                    case 13: sar = [160, 99]; break;
                    case 14: sar = [4, 3]; break;
                    case 15: sar = [3, 2]; break;
                    case 16: sar = [2, 1]; break;
                    case 255: {
                        sar = [decoder.readUByte() << 8 | decoder.readUByte(), decoder.readUByte() << 8 | decoder.readUByte()];
                        break;
                    }
                    default: {
                        console.error(`  H264: Unknown aspectRatioIdc=${aspectRatioIdc}`);
                    }
                }
            }
            if (decoder.readBoolean()) {
                // overscan_info_present_flag
                decoder.skipBits(1); // overscan_appropriate_flag
            }

            if (decoder.readBoolean()) {
                // video_signal_type_present_flag
                decoder.skipBits(4); // video_format u(3) + video_full_range_flag (1)
                if (decoder.readBoolean()) {
                    // colour_description_present_flag
                    decoder.skipBits(24); // colour_primaries u(8) + transfer_characteristics u(8) + matrix_coefficients u(8)
                }
            }
            if (decoder.readBoolean()) {
                // chroma_loc_info_present_flag
                decoder.skipUEG(); // chroma_sample_loc_type_top_field
                decoder.skipUEG(); // chroma_sample_loc_type_bottom_field
            }
            if (decoder.readBoolean()) {
                if (decoder.bitsAvailable > 64) {
                        // timing_info_present_flag
                    const unitsInTick = decoder.readUInt(); // num_units_in_tick
                    const timeScale = decoder.readUInt(); // time_scale
                    const fixedFrameRate = decoder.readBoolean(); // fixed_frame_rate_flag
                    const frameDuration = timeScale / (2 * unitsInTick);
                    console.log(`timescale: ${timeScale}; unitsInTick: ${unitsInTick}; ` +
                        `fixedFramerate: ${fixedFrameRate}; avgFrameDuration: ${frameDuration}`);
                } else {
                    console.log(`Truncated VUI (${decoder.bitsAvailable})`);
                }
            }
        }
        return {
            profile_idc,
            constraint_set_flags,
            level_idc,
            seq_parameter_set_id,
            pic_width_in_mbs_minus1,
            pic_height_in_map_units_minus1,
            frame_mbs_only_flag,
            frame_crop_left_offset,
            frame_crop_right_offset,
            frame_crop_top_offset,
            frame_crop_bottom_offset,
            sar,
        };
    }
}
