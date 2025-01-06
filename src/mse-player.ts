import { IMsePlayerOption, MediaElementType } from "./util/type";
import { isSafari } from "./util/utils";
import { VideoMuxer } from "./muxer/video";
import { AudioMuxer } from "./muxer/audio";
import Jmuxer from "jmuxer";
import { CMD, MSG, ROTATE_MSG, EEvent } from "./util/enum";
import H264Parser from './util/h264-parser';

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
    fps: number = 30;
    video: VideoMuxer;
    audio: Jmuxer;
    muxerQuene: Promise<unknown>[] = [];
    private _rotateValue: ROTATE_MSG = ROTATE_MSG["0degrees"];
    socket: WebSocket;
    socketHeartBeat: number;
    socketCalcInterval: number;

    startRecording: Boolean = false;
    h264Data = [];
    disableAutoRotate: Boolean = false;
    touchpad: Touchpad;
    keyboard: Keyboard;
    _screenInfo: { width: number, height: number } | null;

    event = eventEmiter;

    lastCalc = 0;
    frameCount = 0;
    bytesReceived = 0;
    prevSendDelayRequestTime: number;

    isPc: boolean = false;
    mouseSensitivity = 1.0;

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
        this._rotateValue = value % 4;
        // 通过set 来实现 rotateValue 在其他class 中的状态同步
        this.video.rotateValue = this._rotateValue;
        this.touchpad.rotateValue = this._rotateValue;
        eventEmiter.emit(EEvent.Rotate, this._rotateValue);
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
            disableAutoRotate,
            fps,
            isPc,
            mouseSensitivity
        } = options;
        this.wsAddress = wsAddress;
        this.videoElement = videoElement;
        this.audioElement = audioElement;
        this.deviceId = deviceId;
        this.testId = testId;
        this.controlKey = controlKey;
        this.adminKey = adminKey;
        this.mode = mode;
        this.disableAutoRotate = disableAutoRotate;
        this.fps = fps;
        this.isPc = isPc;
        this.mouseSensitivity = mouseSensitivity;

        if(isPc) {
            this.fps = 60;
        }

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
            rotateValue: this.rotateValue,
            sendCommand: this.sendCommand,
            fps: this.fps
        });
        this.muxerQuene.push(this.video.init());
    }

    initAudio() {
        if (!(this.audioElement instanceof HTMLAudioElement)) return;
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
            this.socket.addEventListener("open", this.onSocketOpen);
            this.socket.addEventListener("message", this.onSocketMessage);
            this.socket.addEventListener("error", this.onSocketError);
            this.socket.addEventListener("close", this.onSocketClose);
        } catch (error) {
            console.error("muxer 初始化失败");
        }
    }

    initTouch() {
        this.touchpad = new Touchpad({
            node: this.videoElement,
            rotateValue: this.rotateValue,
            sendCommand: this.sendCommand,
            isPc: this.isPc,
            mouseSensitivity: this.mouseSensitivity
        });
    }

    initKeyboard() {
        this.keyboard = new Keyboard({
            sendCommand: this.sendCommand,
        });
    }

    sendCommand = (data: object, isPc = false) => {
        if (isPc) {
            const msg = JSON.stringify(
                {
                    device_id: this.deviceId,
                    test_id_str: this.testId,
                    controlkey: this.controlKey,
                    adminkey: this.adminKey,
                    video_config: this.mode === "image" ? '{"video_mode": 2}' : "",
                    cmd: "bridgecmd",
                    content: `@proxy:ctrl:conn:${JSON.stringify(data)}`
                }
            )
            this.socket.send(msg);
            console.log(msg);
            return;
        }
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
    requestFullScreen = async () => {
        this.touchpad.requestFullScreen();
    }

    rotate = (rotateValue) => {
        if (typeof rotateValue !== 'number') {
            this.rotateValue++;
        } else {
            this.rotateValue = rotateValue;
        }
        this.videoElement.style.transform = `rotate(${this.rotateValue * - 90}deg)`;

        this.video.setVideoElementBound();

    }

    reset() { // 做一系列事件绑定清除
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
        this.socketCalcInterval && clearInterval(this.socketCalcInterval);
        this.video.clean();
        this.touchpad.clean();
        this.keyboard.clean();
        this.socket.removeEventListener("open", this.onSocketOpen);
        this.socket.removeEventListener("message", this.onSocketMessage);
        this.socket.removeEventListener("error", this.onSocketError);
        this.socket.removeEventListener("close", this.onSocketClose);
        eventEmiter.removeAllListeners();
    }

    onSocketOpen = (event: MessageEvent) => {
        console.log("websocket open");
        eventEmiter.emit(EEvent.SocketOpen, event);
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

        this.socketCalcInterval = setInterval(() => {
            this.prevSendDelayRequestTime = Date.now();
            this.sendCommand({
                cmd: CMD.CalcDelay,
                web_req_time: this.prevSendDelayRequestTime,
            });
        }, 2000)
    }

    calcFpsAndBytes = (messageData) => {
        const now = Date.now();
        this.frameCount++;
        this.bytesReceived += messageData.byteLength;

        if (this.lastCalc === 0) {
            this.lastCalc = now;
        } else if (now - this.lastCalc > 1000) {
            const result = {
                fps: Math.ceil((this.frameCount * 1000) / (now - this.lastCalc)),
                netSpeed: ((this.bytesReceived * 1000) / (1024 * (now - this.lastCalc))).toFixed(2),
            }
            eventEmiter.emit(EEvent.VideoInfo, result);
            this.frameCount = 0;
            this.bytesReceived = 0;
            this.lastCalc = now;
        }
    }

    _hasScreenInfoChange = (newInfo: { width: number, height: number }) => {
        return this._screenInfo?.width != newInfo.width || this._screenInfo.height != newInfo.height
    }

    _updateScreenInfo = (info: { width: number, height: number }) => {
        this._screenInfo = info;
    }
    onSocketMessage = (event: MessageEvent) => {
        eventEmiter.emit(EEvent.SocketMessage, event);
        const messageData = new Uint8Array(event.data);
        switch (messageData[0]) {
            case MSG.H264:
                this.calcFpsAndBytes(messageData);
                const naluType = H264Parser.parseNALUType(messageData);
                if (naluType === 7) {
                    const { width, height } = H264Parser.readSPS(messageData.slice(4));
                    const newInfo = {
                        width,
                        height
                    }
                    if (!this._screenInfo) {
                        this._updateScreenInfo(newInfo);
                    }
                    if (this._hasScreenInfoChange(newInfo)) {
                        console.log("MSE Player receive new SPS NALU");
                        this.video.muxer.reset();
                        this._updateScreenInfo(newInfo);
                    }
                }

                this.video.muxer.feed({
                    video: messageData,
                });
                if (this.startRecording) {
                    this.h264Data.push(messageData);
                }
                this.videoElement.play();
                break;

            case MSG.AAC:
                this.audio?.muxer?.feed({
                    audio: messageData,
                });
                break;

            case MSG.Rotate:
                if (this.disableAutoRotate) break; // 安卓14及 以上不做自动旋转
                console.log('rotate', messageData[4]);
                this.rotate(messageData[4]);
                break;

            case MSG.Screenshot:
                console.log('capture');
                const dataView = new DataView(messageData.buffer, 1, 8);
                const jpgTimeStr = dataView.getUint32(0) * 1000;
                const jpgLen = dataView.getUint32(4);
                const blobData = new Blob([new Uint8Array(messageData.buffer, 9, jpgLen)], { type: 'image/jpeg' });
                const jpgUrl = URL.createObjectURL(blobData);
                eventEmiter.emit(EEvent.Capture, {
                    url: jpgUrl,
                    time: new Date(jpgTimeStr)
                });
                break;

            case MSG.DelayData:
                let now = Date.now();
                // if (now - this.lastRefresh < 2000){
                //     return;
                // }
                // {
                //     "web_req_time": 1732693841357,
                //     "webvideo_req_time": 1732693841461,
                //     "videosvr_req_time": 1732693841461,
                //     "pc_req_time": 1732693841425,
                //     "videosvr_resp_time": 1732693841495,
                //     "webvideo_resp_time": 1732693841496
                // }
                // web => webvideosvr => videosvr => pc(phone)
                const msg = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(messageData.slice(1))));
                if (msg.web_req_time !== this.prevSendDelayRequestTime) {
                    return;
                }
                const web_video_to_pc = (msg.webvideo_resp_time - msg.webvideo_req_time) / 2;
                const video_to_pc = (msg.videosvr_resp_time - msg.videosvr_req_time) / 2;
                const total = (now - msg.web_req_time) / 2;

                const web_video_to_video = web_video_to_pc - video_to_pc;
                const user_to_web_video = total - web_video_to_pc;
                eventEmiter.emit(EEvent.DelayData, {
                    total,
                    user_to_web_video,
                    web_video_to_video,
                    video_to_pc
                });
                break;

            case MSG.Clipboard:
                console.log('get clipboard');
                const data = messageData.slice(1);
                const text = new TextDecoder('utf-8').decode(new Uint8Array(data));
                eventEmiter.emit(EEvent.Clipboard, text);
                break;
            case MSG.FileUploadVal:
                console.log('get fileUpload Val');
                const data1 = messageData.slice(1);
                const text1 = new TextDecoder('utf-8').decode(new Uint8Array(data1));
                eventEmiter.emit(EEvent.FileUploadVal, text1);
                break;
            case MSG.ImageStream:
                this.calcFpsAndBytes(messageData);
                if (messageData[1] === 0) { // 图片流
                } else { // bridge cmd responese
                    console.log('get cmd response');
                    let data2 = messageData.slice(1);
                    const text2 = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(data2)));
                    eventEmiter.emit(EEvent.BridgeCMD, text2);
                }
                break;
            default:
                console.warn("useless message data");
        }
    }
    onSocketError = (e) => {
        console.error("websocket error", e);
        eventEmiter.emit(EEvent.SocketError, e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
        this.socketCalcInterval && clearInterval(this.socketCalcInterval);
    }
    onSocketClose = (e) => {
        console.error("websocket close", e);
        eventEmiter.emit(EEvent.SocketClose, e);
        this.socketHeartBeat && clearInterval(this.socketHeartBeat);
        this.socketCalcInterval && clearInterval(this.socketCalcInterval);
    }
}
