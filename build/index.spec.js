"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const _1 = require(".");
const testAudioPath = path_1.default.resolve(__dirname, './__fixtures__/test.webm');
describe('node-grumble client integration tests', () => {
    it('should connect', (done) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        jest.setTimeout(30000);
        const grumble = _1.NodeGrumble.create({
            url: String(process.env.MUMBLE_SERVER_URL),
        });
        grumble.on(_1.Events.Error, (error) => {
            console.error('Client errored:', error);
        });
        grumble.on(_1.Events.Packet, (packet) => {
            console.log(packet);
        });
        grumble.on(_1.MessageType.UserState, (userState) => {
            console.log(`UserState packet received: ${userState.name}`);
        });
        grumble.on(_1.Events.Close, () => {
            console.log('Connection got closed.');
            done();
        });
        const connection = yield grumble.connect();
        connection.sendTextMessage('message-test');
        yield connection.playFile(testAudioPath, 0.2);
        yield connection.playFile(testAudioPath, 0.4);
        yield connection.playFile(testAudioPath, 0.6);
        yield connection.playFile(testAudioPath);
        setTimeout(() => {
            connection.disconnect();
        }, 2000);
    }));
    it('should fail to connect', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        yield expect(_1.NodeGrumble.create({ url: 'nonexistant.server' }).connect()).rejects.toThrowErrorMatchingSnapshot();
    }));
});
//# sourceMappingURL=index.spec.js.map