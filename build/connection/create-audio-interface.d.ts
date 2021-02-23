/// <reference types="node" />
import { TLSSocket } from 'tls';
export declare const createAudioInterface: (socket: TLSSocket) => {
    setBitrate: (bitrate: number) => void;
    writeAudio: (buffer: Buffer, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
};
