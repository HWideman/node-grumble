/// <reference types="node" />
import { Writable as WritableStream } from 'stream';
import { Connection } from './create-connection';
export declare class AudioDispatcher extends WritableStream {
    private whisperId;
    private connection;
    private processObserver;
    private processInterval;
    private frameQueue;
    private lastWrite;
    private lastFrame;
    private lastFrameWritten;
    private voiceSequence;
    constructor(connection: Connection, voiceTarget: number);
    close(): void;
    _processAudioBuffer(): void;
    _write(chunk: Buffer, encoding: BufferEncoding, cb: () => void): void;
}
