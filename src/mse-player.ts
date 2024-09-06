
import { IMsePlayerOption } from './type';
import { isSafari } from './utils';
import { VideoMuxer } from './muxer/video';
import { AudioMuxer } from './muxer/audio';
import Jmuxer from 'jmuxer';
import { WEBSOCKETCMD } from './enum';
export default class MsePlayer {
    wsAddress: string;
    videoElement: HTMLVideoElement;
    deviceId: string;
    testId: string;
    controlKey: string;
    enableAudio: boolean = false;
    mode: 'video' | 'image' = 'video';
    video: VideoMuxer;
    audio: Jmuxer;
    muxerQuene: Promise<unknown>[];

    socket: WebSocket;
    socketHeartBeat: number;

    constructor(options: IMsePlayerOption) {
        this.initOption(options);
        this.initVideo();
        this.initAudio();
        this.initWebSocket();
    }

    initOption(options: IMsePlayerOption) {
        const { wsAddress, videoElement, deviceId, testId, controlKey, enableAudio, mode } = options;
        this.wsAddress = wsAddress;
        this.videoElement = videoElement;
        this.deviceId = deviceId;
        this.testId = testId;
        this.controlKey = controlKey;
        this.enableAudio = !!enableAudio;
        this.mode = mode;

        this.checkOptions();
    }

    checkOptions() {
        if(!(this.videoElement instanceof HTMLVideoElement)) {
            throw new Error('请传入正确的videoElement');
        }
        // todo  其他必填参数的检测
    }

    initVideo() {
        if(this.mode === 'image') {
            // todo 图片流
            return ;
        }
        this.video = new VideoMuxer({
            node: this.videoElement
        });
        this.muxerQuene.push(this.video.init());
    }

    initAudio() {
        if(!this.enableAudio) return;
        if(isSafari()) {
            console.error('safari 不支持audio');
            return
        }
        this.audio = new AudioMuxer({
            node: this.videoElement
        });
    }

    async initWebSocket() {
        // 等到muxer 组件初始化后再发起websocket 请求
        try {
            await Promise.all(this.muxerQuene);
            this.socket = new WebSocket(this.wsAddress);
            this.socket.binaryType = 'arraybuffer';
            this.socket.addEventListener('open', this.onSocketOpen);
            this.socket.addEventListener('message', this.onSocketMessage);
            this.socket.addEventListener('error', this.onSocketError);
            this.socket.addEventListener('close', this.onSocketClose);
        } catch (error) {
            console.error('muxer 初始化失败');
        }

    }

    sendCommand(data: object) {
        this.socket.send(
            JSON.stringify(Object.assign(data, {
                device_id: this.deviceId,
                test_id_str: this.testId,
                controlkey: this.controlKey,
                video_config: this.mode === "image" ? "{\"video_mode\": 2}" : ""
            })),
        );
    }

    onSocketOpen() {
        console.log('websocket open');
        // 心跳逻辑
        this.socketHeartBeat = setInterval(() => {
            this.sendCommand({
                cmd: WEBSOCKETCMD.CmdHeart,
                heart: 1
            });
        }, 30000);

        this.sendCommand({
            cmd: WEBSOCKETCMD.CmdStartStream
        });
    }
    onSocketMessage(event: MessageEvent) {

    }
    onSocketError(e) {
        console.error('websocket error', e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
    }
    onSocketClose(e) {
        console.error('websocket close', e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
    }


}