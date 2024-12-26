import { ROTATE_MSG } from './enum';

export type MediaElementType = HTMLVideoElement | HTMLImageElement;

export interface IMsePlayerOption  {
    wsAddress: string;
    videoElement: MediaElementType;
    deviceId: string;
    testId: string;
    controlKey: string;
    adminKey?: string;
    audioElement?: HTMLAudioElement;
    disableAutoRotate?: Boolean;
    mode: 'video' | 'image';
    fps?: number;
    isPc?: boolean;
}


export interface IAudioMuxer{
    node: HTMLAudioElement;
}

export interface IVideoMuxer{
    node: MediaElementType;
    rotateValue: ROTATE_MSG
    sendCommand: (object) => void;
    fps: number
}

export interface ITouchOptions {
    node: MediaElementType;
    rotateValue: ROTATE_MSG;
    sendCommand: (object) => void;
    isPc?: boolean;
}

export interface IKeyBoardOptions {
    sendCommand: (object) => void;
}
