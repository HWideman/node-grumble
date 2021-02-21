"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeGrumble = void 0;
const tslib_1 = require("tslib");
const types_1 = require("./types");
const Mumble_1 = require("./proto/Mumble");
const create_connection_1 = require("./connection/create-connection");
const create_audio_handlers_1 = require("./connection/create-audio-handlers");
const EventEmitter_1 = require("./structures/EventEmitter");
const connect = (options, events) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const connection = yield create_connection_1.createConnection(options, events);
    const audioHandlers = create_audio_handlers_1.createAudioHandlers(connection);
    const handlers = {
        disconnect: connection.disconnect.bind(connection),
        playFile: audioHandlers.playFile.bind(audioHandlers),
        sendTextMessage: (message, channelId = 0) => {
            const textMessage = Mumble_1.TextMessage.fromPartial({
                channelId: [channelId],
                message,
            });
            connection.write(types_1.Messages.TextMessage, Mumble_1.TextMessage.encode(textMessage));
        },
    };
    return handlers;
});
exports.NodeGrumble = {
    create: (options) => {
        const events = new EventEmitter_1.TypedEventEmitter();
        return {
            on: events.on.bind(events),
            connect: () => connect(options, events),
        };
    },
};
//# sourceMappingURL=client.js.map