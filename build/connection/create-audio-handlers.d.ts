import { Connection } from './create-connection';
export declare const createAudioHandlers: (connection: Connection) => {
    playFile: (filename: string, volume?: number, channelId?: number) => Promise<void>;
};
