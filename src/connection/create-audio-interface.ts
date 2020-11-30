import { TLSSocket } from 'tls';
import { OpusEncoder } from '@discordjs/opus';
import { Codec, Messages } from '../types';
import * as Varint from '../structures/Varint';
import { defaultAudioConfig } from './audio-configuration';

export const createAudioInterface = (socket: TLSSocket) => {
  const opusEncoder = new OpusEncoder(
    defaultAudioConfig.sampleRate,
    defaultAudioConfig.channels
  );

  /**
   * TODO: Review the voice sequence implementation and mutation.
   * Looks unnecessarily circular. There is a count being tracked here AND in the AudioDispatcher.
   */
  let voiceSequence = 0;

  function writeAudio(
    buffer: Buffer,
    whisperTarget?: number,
    initialVoiceSequence?: number,
    isFinal?: boolean
  ) {
    const encodedBuffer = opusEncoder.encode(buffer);

    const target = whisperTarget || 0;
    const typeTarget = (Codec.Opus << 5) | target;

    let currentVoiceSequence = initialVoiceSequence ?? voiceSequence;

    const sequenceVarint = Varint.encode(currentVoiceSequence);

    const voiceHeader = Buffer.alloc(1 + sequenceVarint.length);
    voiceHeader[0] = typeTarget;
    sequenceVarint.value.copy(voiceHeader, 1, 0);

    if (encodedBuffer.length > 0x1fff) {
      throw new TypeError(
        `Audio frame too long! Max Opus length is ${0x1fff} bytes.`
      );
    }

    const headerValue = isFinal
      ? encodedBuffer.length + (1 << 7)
      : encodedBuffer.length;

    const headerVarint = Varint.encode(headerValue);
    const header = headerVarint.value;

    const frame = Buffer.alloc(header.length + encodedBuffer.length);
    header.copy(frame, 0);
    encodedBuffer.copy(frame, header.length);

    currentVoiceSequence++;

    const socketHeader = Buffer.alloc(6);
    socketHeader.writeUInt16BE(Messages.UDPTunnel, 0);
    socketHeader.writeUInt32BE(voiceHeader.length + frame.length, 2);

    socket.write(socketHeader);
    socket.write(voiceHeader);
    socket.write(frame);

    if (currentVoiceSequence > voiceSequence) {
      voiceSequence = currentVoiceSequence;
    }

    /** Result can be used by dispatch streamer to keep it's own voice sequence state. */
    return 1;
  }

  return {
    writeAudio,
  };
};
