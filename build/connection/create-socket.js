"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSocket = void 0;
const tslib_1 = require("tslib");
const tls_1 = tslib_1.__importDefault(require("tls"));
const types_1 = require("../types");
const protobuf_1 = require("../proto/protobuf");
const create_audio_interface_1 = require("./create-audio-interface");
const createSocket = (finalOptions, events) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { decodeMessage } = yield protobuf_1.createMumbleProtobufDecoder();
    const socket = tls_1.default.connect(finalOptions.port, finalOptions.url, finalOptions, () => events.emit(types_1.Events.Connected, undefined));
    socket.on('close', () => {
        events.emit(types_1.Events.Close, undefined);
    });
    socket.on('error', (error) => {
        events.emit(types_1.Events.Error, error);
    });
    function newMultiPartBuffer(buffer, totalLength, processedLength) {
        return JSON.parse(JSON.stringify({ buffer, totalLength, processedLength }));
    }
    ;
    let multipartBuffer = null;
    socket.on('data', (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        while (data.length > 6) {
            const typeId = data.readUInt16BE(0);
            const length = data.readUInt32BE(2);
            const totalLength = length + 6;
            if (data.length < totalLength && multipartBuffer === null) {
                multipartBuffer = newMultiPartBuffer(data, totalLength, data.length);
                console.log("ISMULTIPART", multipartBuffer);
                continue;
            }
            if (!!multipartBuffer) {
                multipartBuffer.buffer = Buffer.concat([multipartBuffer.buffer, data]);
                multipartBuffer.processedLength = multipartBuffer.processedLength + data.length;
                console.log("BATCHED", multipartBuffer);
            }
            if (!!multipartBuffer && multipartBuffer.processedLength !== multipartBuffer.totalLength) {
                continue;
            }
            if (!!multipartBuffer) {
                console.log("REACHED PROCESSING STEP");
                data = multipartBuffer.buffer;
            }
            const buffer = data.slice(6, totalLength);
            data = data.slice(buffer.length + 6);
            if (typeId === types_1.Messages.UDPTunnel) {
                if (process.env.DEBUG_UDP) {
                    console.log('UDPTunnel message received:', buffer);
                }
                break;
            }
            const packet = decodeMessage(typeId, buffer);
            events.emit(types_1.Events.Packet, packet);
            events.emit(packet.type, packet.message);
        }
    }));
    const write = (type, writer) => {
        return protobuf_1.writePacketToSocket(type, writer.finish(), socket);
    };
    const disconnect = () => socket.end();
    const { setBitrate, writeAudio } = create_audio_interface_1.createAudioInterface(socket);
    return {
        socket,
        events,
        write,
        disconnect,
        writeAudio,
        setBitrate,
    };
});
exports.createSocket = createSocket;
//# sourceMappingURL=create-socket.js.map