import { NodeGrumbleOptions, Messages, UnwrapPromise, MessageEventMap, EventMap } from '../types';
import { TypedEventEmitter } from '../structures/EventEmitter';
export declare type Connection = UnwrapPromise<ReturnType<typeof createConnection>>;
export declare const createConnection: (options: NodeGrumbleOptions, events: TypedEventEmitter<MessageEventMap & EventMap>) => Promise<Pick<{
    socket: any;
    events: TypedEventEmitter<MessageEventMap & EventMap>;
    write: (type: Messages, writer: any) => void;
    disconnect: () => any;
    writeAudio: (buffer: any, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
    setBitrate: (bitrate: number) => void;
}, "writeAudio" | "disconnect" | "events" | "write">>;
