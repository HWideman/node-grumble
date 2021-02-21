"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMumbleProtobufDecoder = exports.createPacketHeader = exports.writePacketToSocket = exports.encodeVersion = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const protobufjs_1 = tslib_1.__importDefault(require("protobufjs"));
const types_1 = require("../types");
const protoFilePath = path_1.default.join(__dirname, './Mumble.proto');
const encodeVersion = (major, minor, patch) => {
    return (((major & 0xffff) << 16) | ((minor & 0xff) << 8) | (patch & 0xff));
};
exports.encodeVersion = encodeVersion;
const writePacketToSocket = (messageTypeId, packet, socket) => {
    socket.write(exports.createPacketHeader(messageTypeId, packet.length));
    socket.write(packet);
};
exports.writePacketToSocket = writePacketToSocket;
const createPacketHeader = (messageTypeId, packetLength) => {
    const header = Buffer.alloc(6);
    header.writeUInt16BE(messageTypeId, 0);
    header.writeUInt32BE(packetLength, 2);
    return header;
};
exports.createPacketHeader = createPacketHeader;
const createMumbleProtobufDecoder = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const protobuf = yield protobufjs_1.default.load(protoFilePath);
    const decodeMessage = (typeId, buffer) => {
        const type = types_1.Messages[typeId];
        const packet = protobuf.lookupType(`MumbleProto.${type}`);
        const message = packet.decode(buffer).toJSON();
        return {
            type,
            message,
        };
    };
    return {
        decodeMessage,
    };
});
exports.createMumbleProtobufDecoder = createMumbleProtobufDecoder;
//# sourceMappingURL=protobuf.js.map