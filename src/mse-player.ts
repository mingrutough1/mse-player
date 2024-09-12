import { IMsePlayerOption, MediaElementType } from "./util/type";
import { isSafari } from "./util/utils";
import { VideoMuxer } from "./muxer/video";
import { AudioMuxer } from "./muxer/audio";
import Jmuxer from "jmuxer";
import { CMD, MSG, ROTATE_MSG, EEvent } from "./util/enum";

import Touchpad from "./media/touch";
import Keyboard from "./media/keyboard";

import eventEmiter from './util/event-bus';

export default class MsePlayer {
    wsAddress: string;
    videoElement: MediaElementType;
    audioElement: HTMLAudioElement;
    deviceId: string;
    testId: string;
    controlKey: string;
    adminKey: string;
    mode: "video" | "image" = "video";
    video: VideoMuxer;
    audio: Jmuxer;
    muxerQuene: Promise<unknown>[] = [];
    private _rotateValue: ROTATE_MSG = ROTATE_MSG["0degrees"];
    socket: WebSocket;
    socketHeartBeat: number;

    touchpad: Touchpad;
    keyboard: Keyboard;

    event = eventEmiter;

    constructor(options: IMsePlayerOption) {
        this.initOption(options);
        this.initVideo();
        this.initAudio();
        this.initWebSocket();
    }

    get rotateValue(): ROTATE_MSG {
        return this._rotateValue;
    }
    set rotateValue(value) {
        this._rotateValue = value;
        // 通过set 来实现 rotateValue 在其他class 中的状态同步
        this.video.rotateValue = value;
        this.touchpad.rotateValue = value;
        eventEmiter.emit(EEvent.Rotate, value);
    }
    initOption(options: IMsePlayerOption) {
        const {
            wsAddress,
            videoElement,
            audioElement,
            deviceId,
            testId,
            controlKey,
            adminKey,
            mode,
        } = options;
        this.wsAddress = wsAddress;
        this.videoElement = videoElement;
        this.audioElement = audioElement;
        this.deviceId = deviceId;
        this.testId = testId;
        this.controlKey = controlKey;
        this.adminKey = adminKey;
        this.mode = mode;

        this.checkOptions();
    }

    checkOptions() {
        if (
            !(
                this.videoElement instanceof HTMLVideoElement ||
                this.videoElement instanceof HTMLImageElement
            )
        ) {
            throw new Error("请传入正确的videoElement");
        }
        // todo  其他必填参数的检测
    }

    initVideo() {
        this.initTouch();
        this.initKeyboard();
        if (this.mode === "image") {
            // todo 图片流
            return;
        }
        this.video = new VideoMuxer({
            node: this.videoElement,
            rotateValue: this.rotateValue
        });
        this.muxerQuene.push(this.video.init());
    }

    initAudio() {
        if(!(this.audioElement instanceof HTMLAudioElement)) return;
        if (isSafari()) {
            console.error("safari 不支持audio");
            return;
        }
        this.audio = new AudioMuxer({
            node: this.audioElement,
        });
        this.muxerQuene.push(this.audio.init());
    }

    async initWebSocket() {
        // 等到muxer 组件初始化后再发起websocket 请求
        try {
            await Promise.all(this.muxerQuene);
            this.socket = new WebSocket(this.wsAddress);
            this.socket.binaryType = "arraybuffer";
            this.socket.addEventListener("open", this.onSocketOpen.bind(this));
            this.socket.addEventListener("message", this.onSocketMessage.bind(this));
            this.socket.addEventListener("error", this.onSocketError.bind(this));
            this.socket.addEventListener("close", this.onSocketClose.bind(this));
        } catch (error) {
            console.error("muxer 初始化失败");
        }
    }

    initTouch() {
        this.touchpad = new Touchpad({
            node: this.videoElement,
            rotateValue: this.rotateValue,
            sendCommand: this.sendCommand,
        });
    }

    initKeyboard() {
        this.keyboard = new Keyboard({
            sendCommand: this.sendCommand,
        });
    }

    sendCommand = (data: object) => {
        console.log(data);
        this.socket.send(
            JSON.stringify(
                Object.assign(data, {
                    device_id: this.deviceId,
                    test_id_str: this.testId,
                    controlkey: this.controlKey,
                    adminkey: this.adminKey,
                    video_config: this.mode === "image" ? '{"video_mode": 2}' : "",
                })
            )
        );
    };

    rotate = (rotateValue) => {
        if(typeof rotateValue !== 'number') {
            this.rotateValue++;
        } else {
            this.rotateValue = rotateValue;
        }
        this.videoElement.style.transform = `rotate(${this.rotateValue * - 90}deg)`;

        this.video.setVideoElementBound();

    }

    
    onSocketOpen() {
        console.log("websocket open");
        // 心跳逻辑
        this.socketHeartBeat = setInterval(() => {
            this.sendCommand({
                cmd: CMD.Heart,
                heart: 1,
            });
        }, 30000);

        this.sendCommand({
            cmd: CMD.StartStream,
        });
    }
    onSocketMessage(event: MessageEvent) {
        const messageData = new Uint8Array(event.data);
        switch (messageData[0]) {
            case MSG.H264:
                // todo 判断流宽高是否变化，是则重新reset Muxer
                this.video.muxer.feed({
                    video: messageData,
                });

                break;

            case MSG.AAC:
                this.audio.muxer.feed({
                    audio: messageData,
                });
                break;

            case MSG.Rotate:
                console.log('rotate', messageData[4]);
                this.rotate(messageData[4]);

            default:
                // console.warn("useless message data");
        }
    }
    onSocketError(e) {
        console.error("websocket error", e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
    }
    onSocketClose(e) {
        console.error("websocket close", e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
    }
}
