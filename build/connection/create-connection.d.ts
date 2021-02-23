/// <reference types="node" />
import { NodeGrumbleOptions, Messages, UnwrapPromise, MessageEventMap, EventMap } from '../types';
import { TypedEventEmitter } from '../structures/EventEmitter';
export declare type Connection = UnwrapPromise<ReturnType<typeof createConnection>>;
export declare const createConnection: (options: NodeGrumbleOptions, events: TypedEventEmitter<MessageEventMap & EventMap>) => Promise<Pick<{
    socket: import("tls").TLSSocket;
    events: TypedEventEmitter<MessageEventMap & EventMap>;
    write: (type: Messages, writer: import("protobufjs").Writer) => void;
    disconnect: () => void;
    writeAudio: (buffer: Buffer, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
    setBitrate: (bitrate: number) => void;
}, "writeAudio" | "disconnect" | "events" | "write">>;
