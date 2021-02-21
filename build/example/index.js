"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const __1 = require("../");
const main = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const grumble = __1.NodeGrumble.create({
        url: String(process.env.MUMBLE_SERVER_URL),
        name: String((_a = process.env.MUMBLE_USERNAME) !== null && _a !== void 0 ? _a : 'node-grumble'),
    });
    grumble.on(__1.Events.Connected, () => {
        console.log('Client is connected.');
    });
    grumble.on(__1.Events.Error, (error) => {
        console.error('Client errored: ', error);
    });
    grumble.on(__1.Events.Packet, (packet) => {
        if (packet.type === __1.MessageType.UserState) {
            console.log('user state changes received');
            console.log(packet.message.name);
        }
    });
    grumble.on(__1.MessageType.ChannelState, (channelState) => {
        console.log('Received Channel State event:', channelState);
    });
    grumble.on(__1.Events.Close, () => {
        console.log('Connection got closed.');
    });
    const connection = yield grumble.connect();
    process.on('SIGINT', () => {
        connection.disconnect();
    });
});
main();
//# sourceMappingURL=index.js.map