import { Messages, Packet } from '../types';
export declare const encodeVersion: (major: number, minor: number, patch: number) => number;
export declare const writePacketToSocket: (messageTypeId: Messages, packet: Uint8Array, socket: any) => void;
export declare const createPacketHeader: (messageTypeId: Messages, packetLength: number) => any;
export declare const createMumbleProtobufDecoder: () => Promise<{
    decodeMessage: (typeId: Messages, buffer: any) => Packet;
}>;
