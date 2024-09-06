export interface IMsePlayerOption  {
    wsAddress: string;
    videoElement: HTMLVideoElement;
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
    node: HTMLVideoElement;
}
