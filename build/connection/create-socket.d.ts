/// <reference types="node" />
import tls from 'tls';
import { Writer } from 'protobufjs';
import { Messages, MessageEventMap, CompleteGrumbleOptions, EventMap } from '../types';
import { TypedEventEmitter } from '../structures/EventEmitter';
export declare const createSocket: (finalOptions: CompleteGrumbleOptions, events: TypedEventEmitter<MessageEventMap & EventMap>) => Promise<{
    socket: tls.TLSSocket;
    events: TypedEventEmitter<MessageEventMap & EventMap>;
    write: (type: Messages, writer: Writer) => void;
    disconnect: () => void;
    writeAudio: (buffer: Buffer, whisperTarget?: number | undefined, initialVoiceSequence?: number, isFinal?: boolean) => number;
    setBitrate: (bitrate: number) => void;
}>;
