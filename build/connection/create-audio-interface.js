"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAudioInterface = void 0;
const tslib_1 = require("tslib");
const opus_1 = require("@discordjs/opus");
const types_1 = require("../types");
const Varint = tslib_1.__importStar(require("../structures/Varint"));
const audio_configuration_1 = require("./audio-configuration");
const protobuf_1 = require("../proto/protobuf");
const createAudioInterface = (socket) => {
    const opusEncoder = new opus_1.OpusEncoder(audio_configuration_1.defaultAudioConfig.sampleRate, audio_configuration_1.defaultAudioConfig.channels);
    const setBitrate = (bitrate) => {
        opusEncoder.setBitrate(bitrate);
    };
    function writeAudio(buffer, whisperTarget, initialVoiceSequence = 0, isFinal = false) {
        const encodedBuffer = opusEncoder.encode(buffer);
        if (encodedBuffer.length > 0x1fff) {
            throw new TypeError(`Audio frame too long! Max Opus length is ${0x1fff} bytes.`);
        }
        const target = whisperTarget || 0;
        const typeTarget = (types_1.Codec.Opus << 5) | target;
        const sequence = Varint.encode(initialVoiceSequence);
        const voiceHeader = Buffer.alloc(1 + sequence.length);
        voiceHeader[0] = typeTarget;
        sequence.copy(voiceHeader, 1, 0);
        const bufferLength = isFinal
            ? encodedBuffer.length + (1 << 7)
            : encodedBuffer.length;
        const header = Varint.encode(bufferLength);
        const frame = Buffer.alloc(header.length + encodedBuffer.length);
        header.copy(frame, 0);
        encodedBuffer.copy(frame, header.length);
        const packetHeader = protobuf_1.createPacketHeader(types_1.Messages.UDPTunnel, voiceHeader.length + frame.length);
        socket.write(packetHeader);
        socket.write(voiceHeader);
        socket.write(frame);
        return 1;
    }
    return {
        setBitrate,
        writeAudio,
    };
};
exports.createAudioInterface = createAudioInterface;
//# sourceMappingURL=create-audio-interface.js.map