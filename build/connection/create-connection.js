"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../types");
const Mumble_1 = require("../proto/Mumble");
const protobuf_1 = require("../proto/protobuf");
const create_socket_1 = require("./create-socket");
const defaultOptions = {
    url: 'localhost',
    port: 64738,
    rejectUnauthorized: false,
    name: 'node-grumble',
    password: '',
    tokens: [],
};
const defaultNetworkConfig = {
    framesPerPacket: 1,
    quality: 40000,
};
const calculateNetworkBandwidth = (bitrate, frames) => {
    let overhead = 20 + 8 + 4 + 1 + 2 + frames + 12;
    overhead *= 800 / frames;
    return overhead + bitrate;
};
const calculateBitrate = (maxBandwidth) => {
    const frames = defaultNetworkConfig.framesPerPacket;
    let bitrate = defaultNetworkConfig.quality;
    if (calculateNetworkBandwidth(bitrate, frames) > maxBandwidth) {
        while (bitrate > 8000 &&
            calculateNetworkBandwidth(bitrate, frames) > maxBandwidth) {
            bitrate -= 1000;
        }
    }
    return bitrate;
};
const createConnection = (options, events) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const completeOptions = Object.assign(Object.assign({}, defaultOptions), options);
        const { socket, write, writeAudio, setBitrate, disconnect, } = yield create_socket_1.createSocket(completeOptions, events);
        let pingInterval;
        events.on(types_1.Events.Connected, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const version = Mumble_1.Version.encode({
                version: protobuf_1.encodeVersion(0, 0, 0),
                release: 'node-grumble',
                os: 'NodeJS',
                osVersion: process.version,
            });
            const authenticate = Mumble_1.Authenticate.fromPartial({
                username: completeOptions.name,
                password: completeOptions.password,
                tokens: completeOptions.tokens,
                opus: true,
            });
            write(types_1.Messages.Version, version);
            write(types_1.Messages.Authenticate, Mumble_1.Authenticate.encode(authenticate));
            pingInterval = setInterval(() => {
                if (socket.writableEnded) {
                    return;
                }
                const ping = Mumble_1.Ping.fromPartial({
                    timestamp: Date.now(),
                });
                write(types_1.Messages.Ping, Mumble_1.Ping.encode(ping));
            }, 15000);
        }));
        events.on(types_1.MessageType.ServerSync, ({ maxBandwidth }) => {
            setBitrate(calculateBitrate(maxBandwidth));
            resolve({
                write,
                writeAudio,
                events,
                disconnect,
            });
        });
        events.on(types_1.Events.Close, () => {
            if (pingInterval) {
                clearInterval(pingInterval);
            }
        });
        events.on(types_1.Events.Error, reject);
    }));
});
exports.createConnection = createConnection;
//# sourceMappingURL=create-connection.js.map