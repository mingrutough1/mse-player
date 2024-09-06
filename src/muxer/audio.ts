import Jmuxer from 'jmuxer';

import { IAudioMuxer } from '../type'
export class AudioMuxer {
    node: HTMLVideoElement;
    muxer: Jmuxer;

    constructor(options: IAudioMuxer ){
        const { node } = options;
        this.node = node;
        this.init();
    }

    init() {
        this.muxer = new Jmuxer({
            mode: 'audio',
            node: this.node,
            clearBuffer: true,
            debug: false,
            fps: 44,
            flushingTime: 0,
            checkDelay: 2000,
            maxDelay: 500,
            onReady: isReset => {
            },
            onError: error => {
                console.error(' audio buffer related errors:', error);
            },
            onMissingAudioFrames: error => {
                console.error('missing audio frames:', error);
            },
        });
    }
}