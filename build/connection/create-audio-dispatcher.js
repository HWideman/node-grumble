"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioDispatcher = void 0;
const events_1 = require("events");
const stream_1 = require("stream");
const audio_configuration_1 = require("./audio-configuration");
const createFrameBuffer = () => {
    return Buffer.alloc(audio_configuration_1.defaultAudioConfig.frameSize * 2);
};
class AudioDispatcher extends stream_1.Writable {
    constructor(connection, voiceTarget) {
        super();
        this.whisperId = voiceTarget;
        this.connection = connection;
        this.processObserver = new events_1.EventEmitter();
        this.frameQueue = [];
        this.lastWrite = Date.now();
        this.lastFrame = createFrameBuffer();
        this.lastFrameWritten = 0;
        this.voiceSequence = 0;
        this.processInterval = setInterval(this._processAudioBuffer.bind(this), audio_configuration_1.defaultAudioConfig.frameLength);
    }
    close() {
        if (this.processInterval) {
            clearInterval(this.processInterval);
        }
        this.processInterval = null;
        this.frameQueue = [];
        this.lastFrame = createFrameBuffer();
        this.lastFrameWritten = 0;
        this.voiceSequence = 0;
    }
    _processAudioBuffer() {
        while (this.lastWrite + audio_configuration_1.defaultAudioConfig.frameLength <
            Date.now()) {
            if (this.frameQueue.length > 0) {
                const frame = this.frameQueue.shift();
                if (!frame) {
                    break;
                }
                this.voiceSequence += this.connection.writeAudio(frame, this.whisperId, this.voiceSequence, this.frameQueue.length < 1);
                this.processObserver.emit('written');
            }
            this.lastWrite += audio_configuration_1.defaultAudioConfig.frameLength;
        }
    }
    _write(chunk, encoding, cb) {
        while (true) {
            if (this.frameQueue.length >= audio_configuration_1.defaultAudioConfig.frameLength) {
                this.processObserver.once('written', () => {
                    this._write(chunk, encoding, cb);
                });
                return;
            }
            const writtenBefore = this.lastFrameWritten;
            chunk.copy(this.lastFrame, this.lastFrameWritten, 0);
            let written = writtenBefore + chunk.length;
            if (written >= this.lastFrame.length) {
                written = this.lastFrame.length;
                this.frameQueue.push(this.lastFrame);
                this.lastFrame = createFrameBuffer();
                this.lastFrameWritten = 0;
            }
            else {
                this.lastFrameWritten = written;
            }
            if (chunk.length > written - writtenBefore) {
                chunk = chunk.slice(written - writtenBefore);
            }
            else {
                return cb();
            }
        }
    }
}
exports.AudioDispatcher = AudioDispatcher;
//# sourceMappingURL=create-audio-dispatcher.js.map