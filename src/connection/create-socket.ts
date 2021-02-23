import tls from 'tls';
import { Writer } from 'protobufjs';
import {
  Events,
  Messages,
  MessageEventMap,
  CompleteGrumbleOptions,
  EventMap,
  MultiPartBuffer,
} from '../types';
import {
  writePacketToSocket,
  createMumbleProtobufDecoder,
} from '../proto/protobuf';
import { TypedEventEmitter } from '../structures/EventEmitter';
import { createAudioInterface } from './create-audio-interface';

export const createSocket = async (
  finalOptions: CompleteGrumbleOptions,
  events: TypedEventEmitter<MessageEventMap & EventMap>
) => {
  const { decodeMessage } = await createMumbleProtobufDecoder();
  const socket = tls.connect(
    finalOptions.port,
    finalOptions.url,
    finalOptions,
    () => events.emit(Events.Connected, undefined)
  );

  socket.on('close', () => {
    events.emit(Events.Close, undefined);
  });

  socket.on('error', (error: Error) => {
    events.emit(Events.Error, error);
  });

  function newMultiPartBuffer(buffer: Buffer, totalLength: number, processedLength: number): MultiPartBuffer {
    return JSON.parse(JSON.stringify({ buffer, totalLength, processedLength }));
  };
  let multipartBuffer: MultiPartBuffer | null = null;
  socket.on('data', async (data: Buffer) => {
    /**
     * Data Ingestion Loop.
     *
     * Keeps reading data from the socket and emitting events
     * as they're decoded.
     *
     * The `data` buffer is constantly mutated from the Mumble Server,
     * and from this event handler as it cleans the data buffer.
     */
    while (data.length > 6) {
      const typeId = data.readUInt16BE(0);
      const length = data.readUInt32BE(2);
      const totalLength = length + 6;

      if (data.length < totalLength && multipartBuffer === null) {
          multipartBuffer = newMultiPartBuffer(data, totalLength, data.length);
          console.log("ISMULTIPART", multipartBuffer);
          continue;
      }

      // if (data.length < totalLength) {
      //   console.warn(
      //     `Socket Data should be of length "${totalLength}" but it has "${data.length}"`
      //   );
      //   console.warn(`Message Type Id: ${typeId}`);
      //   break;
      // }

      if (!!multipartBuffer) {
        multipartBuffer.buffer = Buffer.concat([multipartBuffer.buffer, data])
        multipartBuffer.processedLength = multipartBuffer.processedLength + data.length;
        console.log("BATCHED", multipartBuffer);
      }

      if (!!multipartBuffer && multipartBuffer.processedLength !== multipartBuffer.totalLength) {
        continue;
      }

      /**
       * Extracts the message buffer out of the data stream
       * then cleans it to make room for the next message.
       */
      if (!!multipartBuffer) {
        console.log("REACHED PROCESSING STEP");
        data = multipartBuffer.buffer;
      }
      const buffer = data.slice(6, totalLength);
      data = data.slice(buffer.length + 6);

      if (typeId === Messages.UDPTunnel) {
        if (process.env.DEBUG_UDP) {
          console.log('UDPTunnel message received:', buffer);
        }

        /**
         * TODO: Implement audio processing.
         *
         * Implementation in NoodleJS:
         * https://github.com/Gielert/NoodleJS/blob/master/src/Connection.js#L96
         */
        // readAudio(data);
        break;
      }

      const packet = decodeMessage(typeId, buffer);
      events.emit(Events.Packet, packet);
      events.emit(packet.type, packet.message);
    }
  });

  const write = (type: Messages, writer: Writer) => {
    return writePacketToSocket(type, writer.finish(), socket);
  };

  const disconnect = () => socket.end();

  const { setBitrate, writeAudio } = createAudioInterface(socket);

  return {
    socket,
    events,
    write,
    disconnect,
    writeAudio,
    setBitrate,
  };
};
