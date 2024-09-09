import { ROTATE_MSG } from './enum';

export type MediaElementType = HTMLVideoElement | HTMLImageElement;

export interface IMsePlayerOption  {
    wsAddress: string;
    videoElement: MediaElementType;
    deviceId: string;
    testId: string;
    controlKey: string;
    enableAudio?: Boolean;
    mode: 'video' | 'image';
}


export interface IAudioMuxer{
    node: HTMLVideoElement;
}

export interface IVideoMuxer{
    node: MediaElementType;
}

export interface ITouchOptions {
    node: MediaElementType;
    rotateValue: ROTATE_MSG;
    sendCommand: (object) => void;

}