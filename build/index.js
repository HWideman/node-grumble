"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MumbleProto = exports.MessageType = exports.Events = exports.NodeGrumble = void 0;
const tslib_1 = require("tslib");
var client_1 = require("./client");
Object.defineProperty(exports, "NodeGrumble", { enumerable: true, get: function () { return client_1.NodeGrumble; } });
var types_1 = require("./types");
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return types_1.Events; } });
Object.defineProperty(exports, "MessageType", { enumerable: true, get: function () { return types_1.MessageType; } });
exports.MumbleProto = tslib_1.__importStar(require("./proto/Mumble"));
//# sourceMappingURL=index.js.map