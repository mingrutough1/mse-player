import JMuxer from 'jmuxer';

import { IVideoMuxer } from '../util/type'
export class VideoMuxer {
    node: HTMLVideoElement;
    muxer: JMuxer;

    constructor(options: IVideoMuxer ){
        const { node } = options;
        this.node = node;
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
                    if(isReset) {
                        // todo, jmuxer reset 重新send cmd startvideo 获取关键帧
                    } else {
                        resolve(true)
                    }
                },
                onError: error => {
                    console.error('video buffer related errors:', error);
                },
                onMissingVideoFrames: error => {
                    console.error('missing audio frames:', error);
                },
            });
        });
    }
}