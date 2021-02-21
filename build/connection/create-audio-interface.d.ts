export declare const createAudioInterface: (socket: any) => {
    setBitrate: (bitrate: number) => void;
    writeAudio: (buffer: any, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
};
