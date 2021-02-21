import { Messages, MessageEventMap, CompleteGrumbleOptions, EventMap } from '../types';
import { TypedEventEmitter } from '../structures/EventEmitter';
export declare const createSocket: (finalOptions: CompleteGrumbleOptions, events: TypedEventEmitter<MessageEventMap & EventMap>) => Promise<{
    socket: any;
    events: TypedEventEmitter<MessageEventMap & EventMap>;
    write: (type: Messages, writer: any) => void;
    disconnect: () => any;
    writeAudio: (buffer: any, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
    setBitrate: (bitrate: number) => void;
}>;
