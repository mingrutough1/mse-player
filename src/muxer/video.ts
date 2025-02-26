import JMuxer from 'jmuxer';

import { IVideoMuxer, MediaElementType } from '../util/type'
import { ROTATE_MSG, CMD, EEvent } from '../util/enum';
import eventEmiter from '../util/event-bus';
import { cursorImg } from '../util/const';

export class VideoMuxer {
    node: MediaElementType;
    muxer: JMuxer;
    rotateValue: ROTATE_MSG;
    sendCommand: (object) => void;
    fps: number = 30;
    constructor(options: IVideoMuxer) {
        const { node, rotateValue, sendCommand, fps } = options;
        this.node = node;
        this.rotateValue = rotateValue;
        this.fps = fps;
        this.sendCommand = sendCommand;
        this.addListener();
        this.node.style.cursor = `url(${cursorImg}) 12 12, default`;

    }

    addListener() {
        window.addEventListener('resize', this.setVideoElementBound);
        document.addEventListener('visibilitychange', () => {
            if(document.visibilityState === 'visible') {
                eventEmiter.emit(EEvent.VideoReset);
                this.muxer.reset();
                this.sendCommand({
                    cmd: CMD.StartStream,
                });
            }
        });
        this.node.addEventListener('loadeddata', this.handleVideoEvent);
    }

    setVideoElementBound = () => {

        const parentWidth = this.node.parentElement.offsetWidth;
        const parentHeight = this.node.parentElement.offsetHeight;

        if (this.rotateValue % 2 === 0) {
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
    }
    init() {
        return new Promise((resolve) => {
            this.muxer = new JMuxer({
                mode: 'video',
                node: this.node,
                clearBuffer: true,
                debug: false,
                fps: this.fps,
                flushingTime: 0,
                onReady: isReset => {
                    this.muxer.mediaSource.duration = Number.POSITIVE_INFINITY;
                    if (isReset) {
                        // this.sendCommand({
                        //     cmd: CMD.StartStream,
                        // });
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