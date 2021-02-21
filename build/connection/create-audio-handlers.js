"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAudioHandlers = void 0;
const tslib_1 = require("tslib");
const fluent_ffmpeg_1 = tslib_1.__importDefault(require("fluent-ffmpeg"));
const audio_configuration_1 = require("./audio-configuration");
const create_audio_dispatcher_1 = require("./create-audio-dispatcher");
const createAudioHandlers = (connection) => {
    const playFile = (filename, volume = 1, channelId = 0) => {
        return new Promise((resolve, reject) => {
            const dispatcher = new create_audio_dispatcher_1.AudioDispatcher(connection, channelId);
            dispatcher.once('finish', () => {
                dispatcher.close();
                resolve();
            });
            fluent_ffmpeg_1.default(filename)
                .output(dispatcher)
                .audioFilters(`volume=${volume}`)
                .audioFrequency(audio_configuration_1.defaultAudioConfig.sampleRate)
                .audioChannels(audio_configuration_1.defaultAudioConfig.channels)
                .on('error', reject)
                .format(audio_configuration_1.defaultAudioConfig.format)
                .run();
        });
    };
    return {
        playFile,
    };
};
exports.createAudioHandlers = createAudioHandlers;
//# sourceMappingURL=create-audio-handlers.js.map