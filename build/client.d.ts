import { EventMap, MessageEventMap, NodeGrumbleOptions } from './types';
export declare const NodeGrumble: {
    create: (options: NodeGrumbleOptions) => {
        on: <K extends import("./types").Events | import("./types").MessageType>(eventName: K, fn: (params: (MessageEventMap & EventMap)[K]) => void) => void;
        connect: () => Promise<{
            disconnect: () => void;
            playFile: (filename: string, volume?: number, channelId?: number) => Promise<void>;
            sendTextMessage: (message: string, channelId?: number) => void;
        }>;
    };
};
