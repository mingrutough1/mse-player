import JMuxer from 'jmuxer';

import { IVideoMuxer, MediaElementType } from '../util/type'
import { ROTATE_MSG, CMD, EEvent } from '../util/enum';
import eventEmiter from '../util/event-bus';

export class VideoMuxer {
    node: MediaElementType;
    muxer: JMuxer;
    rotateValue: ROTATE_MSG;
    sendCommand: (object) => void;
    constructor(options: IVideoMuxer) {
        const { node, rotateValue, sendCommand } = options;
        this.node = node;
        this.rotateValue = rotateValue;
        this.sendCommand = sendCommand;
        this.addListener();
    }

    addListener() {
        window.addEventListener('resize', this.setVideoElementBound);
        this.node.addEventListener('loadeddata', this.handleVideoEvent);
    }

    setVideoElementBound = () => {

        const parentWidth = this.node.parentElement.offsetWidth;
        const parentHeight = this.node.parentElement.offsetHeight;

        if(this.rotateValue % 2 === 0) {
            this.node.style.maxWidth = `${parentWidth}px`;
            this.node.style.maxHeight = `${parentHeight}px`;
        } else {
            this.node.style.maxWidth = `${parentHeight}px`;
            this.node.style.maxHeight = `${parentWidth}px`;
        }
    }

    handleVideoEvent = (e) => {
        eventEmiter.emit(EEvent.VideoReady, e);
    }
    clean() {
        window.removeEventListener('resize', this.setVideoElementBound);
        this.node.removeEventListener('loadeddata', this.handleVideoEvent);
    }
    reset = () => {
        this.muxer.reset();
        this.sendCommand({
            cmd: CMD.StartStream,
        });
    }
    init() {
        return new Promise((resolve) => {
            this.muxer = new JMuxer({
                mode: 'video',
                node: this.node,
                clearBuffer: true,
                debug: false,
                fps: 30,
                flushingTime: 0,
                checkDelay: 5000,
                maxDelay: 1000,
                onReady: isReset => {
                    if (isReset) {
                        // todo, jmuxer reset 重新send cmd startvideo 获取关键帧
                    } else {
                        resolve(true)
                    }
                },
                onError: error => {
                    console.error('video buffer related errors:', error);
                    this.reset();
                },
                onMissingVideoFrames: error => {
                    console.error('missing video frames:', error);
                },
            });
        });
    }
}