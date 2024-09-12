import Jmuxer from 'jmuxer';

import { IAudioMuxer } from '../util/type'
export class AudioMuxer {
    node: HTMLAudioElement;
    muxer: Jmuxer;

    constructor(options: IAudioMuxer) {
        const { node } = options;
        this.node = node;
    }

    init() {
        return new Promise((resolve) => {
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
                    if(!isReset) {
                        resolve(true);
                    }
                },
                onError: error => {
                    console.error(' audio buffer related errors:', error);
                },
                onMissingAudioFrames: error => {
                    console.error('missing audio frames:', error);
                },
            });
        });
    }

    play() {
        this.node.play();
    }
    mute(muted: boolean) {
        this.node.muted = muted;
    }
}