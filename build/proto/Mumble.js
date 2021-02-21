"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestConfig = exports.ServerConfig = exports.RequestBlob = exports.UserStats_Stats = exports.UserStats = exports.CodecVersion = exports.PermissionQuery = exports.VoiceTarget_Target = exports.VoiceTarget = exports.UserList_User = exports.UserList = exports.ContextAction = exports.ContextActionModify = exports.CryptSetup = exports.QueryUsers = exports.ACL_ChanACL = exports.ACL_ChanGroup = exports.ACL = exports.PermissionDenied = exports.TextMessage = exports.BanList_BanEntry = exports.BanList = exports.UserState = exports.UserRemove = exports.ChannelState = exports.ChannelRemove = exports.ServerSync = exports.Reject = exports.Ping = exports.Authenticate = exports.UDPTunnel = exports.Version = exports.contextActionModify_OperationToJSON = exports.contextActionModify_OperationFromJSON = exports.ContextActionModify_Operation = exports.contextActionModify_ContextToJSON = exports.contextActionModify_ContextFromJSON = exports.ContextActionModify_Context = exports.permissionDenied_DenyTypeToJSON = exports.permissionDenied_DenyTypeFromJSON = exports.PermissionDenied_DenyType = exports.reject_RejectTypeToJSON = exports.reject_RejectTypeFromJSON = exports.Reject_RejectType = exports.protobufPackage = void 0;
const protobufjs_1 = require("protobufjs");
const baseVersion = {
    version: 0,
    release: '',
    os: '',
    osVersion: '',
};
const baseUDPTunnel = {};
const baseAuthenticate = {
    username: '',
    password: '',
    tokens: '',
    celtVersions: 0,
    opus: false,
};
const basePing = {
    timestamp: 0,
    good: 0,
    late: 0,
    lost: 0,
    resync: 0,
    udpPackets: 0,
    tcpPackets: 0,
    udpPingAvg: 0,
    udpPingVar: 0,
    tcpPingAvg: 0,
    tcpPingVar: 0,
};
const baseReject = {
    type: 0,
    reason: '',
};
const baseServerSync = {
    session: 0,
    maxBandwidth: 0,
    welcomeText: '',
    permissions: 0,
};
const baseChannelRemove = {
    channelId: 0,
};
const baseChannelState = {
    channelId: 0,
    parent: 0,
    name: '',
    links: 0,
    description: '',
    linksAdd: 0,
    linksRemove: 0,
    temporary: false,
    position: 0,
    maxUsers: 0,
    isEnterRestricted: false,
    canEnter: false,
};
const baseUserRemove = {
    session: 0,
    actor: 0,
    reason: '',
    ban: false,
};
const baseUserState = {
    session: 0,
    actor: 0,
    name: '',
    userId: 0,
    channelId: 0,
    mute: false,
    deaf: false,
    suppress: false,
    selfMute: false,
    selfDeaf: false,
    pluginIdentity: '',
    comment: '',
    hash: '',
    prioritySpeaker: false,
    recording: false,
    temporaryAccessTokens: '',
    listeningChannelAdd: 0,
    listeningChannelRemove: 0,
};
const baseBanList = {
    query: false,
};
const baseBanList_BanEntry = {
    mask: 0,
    name: '',
    hash: '',
    reason: '',
    start: '',
    duration: 0,
};
const baseTextMessage = {
    actor: 0,
    session: 0,
    channelId: 0,
    treeId: 0,
    message: '',
};
const basePermissionDenied = {
    permission: 0,
    channelId: 0,
    session: 0,
    reason: '',
    type: 0,
    name: '',
};
const baseACL = {
    channelId: 0,
    inheritAcls: false,
    query: false,
};
const baseACL_ChanGroup = {
    name: '',
    inherited: false,
    inherit: false,
    inheritable: false,
    add: 0,
    remove: 0,
    inheritedMembers: 0,
};
const baseACL_ChanACL = {
    applyHere: false,
    applySubs: false,
    inherited: false,
    userId: 0,
    group: '',
    grant: 0,
    deny: 0,
};
const baseQueryUsers = {
    ids: 0,
    names: '',
};
const baseCryptSetup = {};
const baseContextActionModify = {
    action: '',
    text: '',
    context: 0,
    operation: 0,
};
const baseContextAction = {
    session: 0,
    channelId: 0,
    action: '',
};
const baseUserList = {};
const baseUserList_User = {
    userId: 0,
    name: '',
    lastSeen: '',
    lastChannel: 0,
};
const baseVoiceTarget = {
    id: 0,
};
const baseVoiceTarget_Target = {
    session: 0,
    channelId: 0,
    group: '',
    links: false,
    children: false,
};
const basePermissionQuery = {
    channelId: 0,
    permissions: 0,
    flush: false,
};
const baseCodecVersion = {
    alpha: 0,
    beta: 0,
    preferAlpha: false,
    opus: false,
};
const baseUserStats = {
    session: 0,
    statsOnly: false,
    udpPackets: 0,
    tcpPackets: 0,
    udpPingAvg: 0,
    udpPingVar: 0,
    tcpPingAvg: 0,
    tcpPingVar: 0,
    celtVersions: 0,
    bandwidth: 0,
    onlinesecs: 0,
    idlesecs: 0,
    strongCertificate: false,
    opus: false,
};
const baseUserStats_Stats = {
    good: 0,
    late: 0,
    lost: 0,
    resync: 0,
};
const baseRequestBlob = {
    sessionTexture: 0,
    sessionComment: 0,
    channelDescription: 0,
};
const baseServerConfig = {
    maxBandwidth: 0,
    welcomeText: '',
    allowHtml: false,
    messageLength: 0,
    imageMessageLength: 0,
    maxUsers: 0,
};
const baseSuggestConfig = {
    version: 0,
    positional: false,
    pushToTalk: false,
};
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
exports.protobufPackage = 'MumbleProto';
var Reject_RejectType;
(function (Reject_RejectType) {
    Reject_RejectType[Reject_RejectType["None"] = 0] = "None";
    Reject_RejectType[Reject_RejectType["WrongVersion"] = 1] = "WrongVersion";
    Reject_RejectType[Reject_RejectType["InvalidUsername"] = 2] = "InvalidUsername";
    Reject_RejectType[Reject_RejectType["WrongUserPW"] = 3] = "WrongUserPW";
    Reject_RejectType[Reject_RejectType["WrongServerPW"] = 4] = "WrongServerPW";
    Reject_RejectType[Reject_RejectType["UsernameInUse"] = 5] = "UsernameInUse";
    Reject_RejectType[Reject_RejectType["ServerFull"] = 6] = "ServerFull";
    Reject_RejectType[Reject_RejectType["NoCertificate"] = 7] = "NoCertificate";
    Reject_RejectType[Reject_RejectType["AuthenticatorFail"] = 8] = "AuthenticatorFail";
    Reject_RejectType[Reject_RejectType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Reject_RejectType = exports.Reject_RejectType || (exports.Reject_RejectType = {}));
function reject_RejectTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'None':
            return Reject_RejectType.None;
        case 1:
        case 'WrongVersion':
            return Reject_RejectType.WrongVersion;
        case 2:
        case 'InvalidUsername':
            return Reject_RejectType.InvalidUsername;
        case 3:
        case 'WrongUserPW':
            return Reject_RejectType.WrongUserPW;
        case 4:
        case 'WrongServerPW':
            return Reject_RejectType.WrongServerPW;
        case 5:
        case 'UsernameInUse':
            return Reject_RejectType.UsernameInUse;
        case 6:
        case 'ServerFull':
            return Reject_RejectType.ServerFull;
        case 7:
        case 'NoCertificate':
            return Reject_RejectType.NoCertificate;
        case 8:
        case 'AuthenticatorFail':
            return Reject_RejectType.AuthenticatorFail;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Reject_RejectType.UNRECOGNIZED;
    }
}
exports.reject_RejectTypeFromJSON = reject_RejectTypeFromJSON;
function reject_RejectTypeToJSON(object) {
    switch (object) {
        case Reject_RejectType.None:
            return 'None';
        case Reject_RejectType.WrongVersion:
            return 'WrongVersion';
        case Reject_RejectType.InvalidUsername:
            return 'InvalidUsername';
        case Reject_RejectType.WrongUserPW:
            return 'WrongUserPW';
        case Reject_RejectType.WrongServerPW:
            return 'WrongServerPW';
        case Reject_RejectType.UsernameInUse:
            return 'UsernameInUse';
        case Reject_RejectType.ServerFull:
            return 'ServerFull';
        case Reject_RejectType.NoCertificate:
            return 'NoCertificate';
        case Reject_RejectType.AuthenticatorFail:
            return 'AuthenticatorFail';
        default:
            return 'UNKNOWN';
    }
}
exports.reject_RejectTypeToJSON = reject_RejectTypeToJSON;
var PermissionDenied_DenyType;
(function (PermissionDenied_DenyType) {
    PermissionDenied_DenyType[PermissionDenied_DenyType["Text"] = 0] = "Text";
    PermissionDenied_DenyType[PermissionDenied_DenyType["Permission"] = 1] = "Permission";
    PermissionDenied_DenyType[PermissionDenied_DenyType["SuperUser"] = 2] = "SuperUser";
    PermissionDenied_DenyType[PermissionDenied_DenyType["ChannelName"] = 3] = "ChannelName";
    PermissionDenied_DenyType[PermissionDenied_DenyType["TextTooLong"] = 4] = "TextTooLong";
    PermissionDenied_DenyType[PermissionDenied_DenyType["H9K"] = 5] = "H9K";
    PermissionDenied_DenyType[PermissionDenied_DenyType["TemporaryChannel"] = 6] = "TemporaryChannel";
    PermissionDenied_DenyType[PermissionDenied_DenyType["MissingCertificate"] = 7] = "MissingCertificate";
    PermissionDenied_DenyType[PermissionDenied_DenyType["UserName"] = 8] = "UserName";
    PermissionDenied_DenyType[PermissionDenied_DenyType["ChannelFull"] = 9] = "ChannelFull";
    PermissionDenied_DenyType[PermissionDenied_DenyType["NestingLimit"] = 10] = "NestingLimit";
    PermissionDenied_DenyType[PermissionDenied_DenyType["ChannelCountLimit"] = 11] = "ChannelCountLimit";
    PermissionDenied_DenyType[PermissionDenied_DenyType["ChannelListenerLimit"] = 12] = "ChannelListenerLimit";
    PermissionDenied_DenyType[PermissionDenied_DenyType["UserListenerLimit"] = 13] = "UserListenerLimit";
    PermissionDenied_DenyType[PermissionDenied_DenyType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PermissionDenied_DenyType = exports.PermissionDenied_DenyType || (exports.PermissionDenied_DenyType = {}));
function permissionDenied_DenyTypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'Text':
            return PermissionDenied_DenyType.Text;
        case 1:
        case 'Permission':
            return PermissionDenied_DenyType.Permission;
        case 2:
        case 'SuperUser':
            return PermissionDenied_DenyType.SuperUser;
        case 3:
        case 'ChannelName':
            return PermissionDenied_DenyType.ChannelName;
        case 4:
        case 'TextTooLong':
            return PermissionDenied_DenyType.TextTooLong;
        case 5:
        case 'H9K':
            return PermissionDenied_DenyType.H9K;
        case 6:
        case 'TemporaryChannel':
            return PermissionDenied_DenyType.TemporaryChannel;
        case 7:
        case 'MissingCertificate':
            return PermissionDenied_DenyType.MissingCertificate;
        case 8:
        case 'UserName':
            return PermissionDenied_DenyType.UserName;
        case 9:
        case 'ChannelFull':
            return PermissionDenied_DenyType.ChannelFull;
        case 10:
        case 'NestingLimit':
            return PermissionDenied_DenyType.NestingLimit;
        case 11:
        case 'ChannelCountLimit':
            return PermissionDenied_DenyType.ChannelCountLimit;
        case 12:
        case 'ChannelListenerLimit':
            return PermissionDenied_DenyType.ChannelListenerLimit;
        case 13:
        case 'UserListenerLimit':
            return PermissionDenied_DenyType.UserListenerLimit;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PermissionDenied_DenyType.UNRECOGNIZED;
    }
}
exports.permissionDenied_DenyTypeFromJSON = permissionDenied_DenyTypeFromJSON;
function permissionDenied_DenyTypeToJSON(object) {
    switch (object) {
        case PermissionDenied_DenyType.Text:
            return 'Text';
        case PermissionDenied_DenyType.Permission:
            return 'Permission';
        case PermissionDenied_DenyType.SuperUser:
            return 'SuperUser';
        case PermissionDenied_DenyType.ChannelName:
            return 'ChannelName';
        case PermissionDenied_DenyType.TextTooLong:
            return 'TextTooLong';
        case PermissionDenied_DenyType.H9K:
            return 'H9K';
        case PermissionDenied_DenyType.TemporaryChannel:
            return 'TemporaryChannel';
        case PermissionDenied_DenyType.MissingCertificate:
            return 'MissingCertificate';
        case PermissionDenied_DenyType.UserName:
            return 'UserName';
        case PermissionDenied_DenyType.ChannelFull:
            return 'ChannelFull';
        case PermissionDenied_DenyType.NestingLimit:
            return 'NestingLimit';
        case PermissionDenied_DenyType.ChannelCountLimit:
            return 'ChannelCountLimit';
        case PermissionDenied_DenyType.ChannelListenerLimit:
            return 'ChannelListenerLimit';
        case PermissionDenied_DenyType.UserListenerLimit:
            return 'UserListenerLimit';
        default:
            return 'UNKNOWN';
    }
}
exports.permissionDenied_DenyTypeToJSON = permissionDenied_DenyTypeToJSON;
var ContextActionModify_Context;
(function (ContextActionModify_Context) {
    ContextActionModify_Context[ContextActionModify_Context["Server"] = 1] = "Server";
    ContextActionModify_Context[ContextActionModify_Context["Channel"] = 2] = "Channel";
    ContextActionModify_Context[ContextActionModify_Context["User"] = 4] = "User";
    ContextActionModify_Context[ContextActionModify_Context["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContextActionModify_Context = exports.ContextActionModify_Context || (exports.ContextActionModify_Context = {}));
function contextActionModify_ContextFromJSON(object) {
    switch (object) {
        case 1:
        case 'Server':
            return ContextActionModify_Context.Server;
        case 2:
        case 'Channel':
            return ContextActionModify_Context.Channel;
        case 4:
        case 'User':
            return ContextActionModify_Context.User;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ContextActionModify_Context.UNRECOGNIZED;
    }
}
exports.contextActionModify_ContextFromJSON = contextActionModify_ContextFromJSON;
function contextActionModify_ContextToJSON(object) {
    switch (object) {
        case ContextActionModify_Context.Server:
            return 'Server';
        case ContextActionModify_Context.Channel:
            return 'Channel';
        case ContextActionModify_Context.User:
            return 'User';
        default:
            return 'UNKNOWN';
    }
}
exports.contextActionModify_ContextToJSON = contextActionModify_ContextToJSON;
var ContextActionModify_Operation;
(function (ContextActionModify_Operation) {
    ContextActionModify_Operation[ContextActionModify_Operation["Add"] = 0] = "Add";
    ContextActionModify_Operation[ContextActionModify_Operation["Remove"] = 1] = "Remove";
    ContextActionModify_Operation[ContextActionModify_Operation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContextActionModify_Operation = exports.ContextActionModify_Operation || (exports.ContextActionModify_Operation = {}));
function contextActionModify_OperationFromJSON(object) {
    switch (object) {
        case 0:
        case 'Add':
            return ContextActionModify_Operation.Add;
        case 1:
        case 'Remove':
            return ContextActionModify_Operation.Remove;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return ContextActionModify_Operation.UNRECOGNIZED;
    }
}
exports.contextActionModify_OperationFromJSON = contextActionModify_OperationFromJSON;
function contextActionModify_OperationToJSON(object) {
    switch (object) {
        case ContextActionModify_Operation.Add:
            return 'Add';
        case ContextActionModify_Operation.Remove:
            return 'Remove';
        default:
            return 'UNKNOWN';
    }
}
exports.contextActionModify_OperationToJSON = contextActionModify_OperationToJSON;
exports.Version = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.version);
        writer.uint32(18).string(message.release);
        writer.uint32(26).string(message.os);
        writer.uint32(34).string(message.osVersion);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVersion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint32();
                    break;
                case 2:
                    message.release = reader.string();
                    break;
                case 3:
                    message.os = reader.string();
                    break;
                case 4:
                    message.osVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVersion);
        if (object.version !== undefined && object.version !== null) {
            message.version = Number(object.version);
        }
        else {
            message.version = 0;
        }
        if (object.release !== undefined && object.release !== null) {
            message.release = String(object.release);
        }
        else {
            message.release = '';
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = String(object.os);
        }
        else {
            message.os = '';
        }
        if (object.osVersion !== undefined && object.osVersion !== null) {
            message.osVersion = String(object.osVersion);
        }
        else {
            message.osVersion = '';
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVersion);
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = 0;
        }
        if (object.release !== undefined && object.release !== null) {
            message.release = object.release;
        }
        else {
            message.release = '';
        }
        if (object.os !== undefined && object.os !== null) {
            message.os = object.os;
        }
        else {
            message.os = '';
        }
        if (object.osVersion !== undefined && object.osVersion !== null) {
            message.osVersion = object.osVersion;
        }
        else {
            message.osVersion = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.release !== undefined && (obj.release = message.release);
        message.os !== undefined && (obj.os = message.os);
        message.osVersion !== undefined &&
            (obj.osVersion = message.osVersion);
        return obj;
    },
};
exports.UDPTunnel = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).bytes(message.packet);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUDPTunnel);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUDPTunnel);
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = bytesFromBase64(object.packet);
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUDPTunnel);
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = object.packet;
        }
        else {
            message.packet = new Uint8Array();
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined &&
            (obj.packet = base64FromBytes(message.packet !== undefined
                ? message.packet
                : new Uint8Array()));
        return obj;
    },
};
exports.Authenticate = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).string(message.username);
        writer.uint32(18).string(message.password);
        for (const v of message.tokens) {
            writer.uint32(26).string(v);
        }
        writer.uint32(34).fork();
        for (const v of message.celtVersions) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(40).bool(message.opus);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAuthenticate);
        message.tokens = [];
        message.celtVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.tokens.push(reader.string());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.celtVersions.push(reader.int32());
                        }
                    }
                    else {
                        message.celtVersions.push(reader.int32());
                    }
                    break;
                case 5:
                    message.opus = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAuthenticate);
        message.tokens = [];
        message.celtVersions = [];
        if (object.username !== undefined && object.username !== null) {
            message.username = String(object.username);
        }
        else {
            message.username = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = String(object.password);
        }
        else {
            message.password = '';
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(String(e));
            }
        }
        if (object.celtVersions !== undefined &&
            object.celtVersions !== null) {
            for (const e of object.celtVersions) {
                message.celtVersions.push(Number(e));
            }
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = Boolean(object.opus);
        }
        else {
            message.opus = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAuthenticate);
        message.tokens = [];
        message.celtVersions = [];
        if (object.username !== undefined && object.username !== null) {
            message.username = object.username;
        }
        else {
            message.username = '';
        }
        if (object.password !== undefined && object.password !== null) {
            message.password = object.password;
        }
        else {
            message.password = '';
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(e);
            }
        }
        if (object.celtVersions !== undefined &&
            object.celtVersions !== null) {
            for (const e of object.celtVersions) {
                message.celtVersions.push(e);
            }
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = object.opus;
        }
        else {
            message.opus = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined &&
            (obj.username = message.username);
        message.password !== undefined &&
            (obj.password = message.password);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e);
        }
        else {
            obj.tokens = [];
        }
        if (message.celtVersions) {
            obj.celtVersions = message.celtVersions.map((e) => e);
        }
        else {
            obj.celtVersions = [];
        }
        message.opus !== undefined && (obj.opus = message.opus);
        return obj;
    },
};
exports.Ping = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint64(message.timestamp);
        writer.uint32(16).uint32(message.good);
        writer.uint32(24).uint32(message.late);
        writer.uint32(32).uint32(message.lost);
        writer.uint32(40).uint32(message.resync);
        writer.uint32(48).uint32(message.udpPackets);
        writer.uint32(56).uint32(message.tcpPackets);
        writer.uint32(69).float(message.udpPingAvg);
        writer.uint32(77).float(message.udpPingVar);
        writer.uint32(85).float(message.tcpPingAvg);
        writer.uint32(93).float(message.tcpPingVar);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePing);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.good = reader.uint32();
                    break;
                case 3:
                    message.late = reader.uint32();
                    break;
                case 4:
                    message.lost = reader.uint32();
                    break;
                case 5:
                    message.resync = reader.uint32();
                    break;
                case 6:
                    message.udpPackets = reader.uint32();
                    break;
                case 7:
                    message.tcpPackets = reader.uint32();
                    break;
                case 8:
                    message.udpPingAvg = reader.float();
                    break;
                case 9:
                    message.udpPingVar = reader.float();
                    break;
                case 10:
                    message.tcpPingAvg = reader.float();
                    break;
                case 11:
                    message.tcpPingVar = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePing);
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = Number(object.timestamp);
        }
        else {
            message.timestamp = 0;
        }
        if (object.good !== undefined && object.good !== null) {
            message.good = Number(object.good);
        }
        else {
            message.good = 0;
        }
        if (object.late !== undefined && object.late !== null) {
            message.late = Number(object.late);
        }
        else {
            message.late = 0;
        }
        if (object.lost !== undefined && object.lost !== null) {
            message.lost = Number(object.lost);
        }
        else {
            message.lost = 0;
        }
        if (object.resync !== undefined && object.resync !== null) {
            message.resync = Number(object.resync);
        }
        else {
            message.resync = 0;
        }
        if (object.udpPackets !== undefined &&
            object.udpPackets !== null) {
            message.udpPackets = Number(object.udpPackets);
        }
        else {
            message.udpPackets = 0;
        }
        if (object.tcpPackets !== undefined &&
            object.tcpPackets !== null) {
            message.tcpPackets = Number(object.tcpPackets);
        }
        else {
            message.tcpPackets = 0;
        }
        if (object.udpPingAvg !== undefined &&
            object.udpPingAvg !== null) {
            message.udpPingAvg = Number(object.udpPingAvg);
        }
        else {
            message.udpPingAvg = 0;
        }
        if (object.udpPingVar !== undefined &&
            object.udpPingVar !== null) {
            message.udpPingVar = Number(object.udpPingVar);
        }
        else {
            message.udpPingVar = 0;
        }
        if (object.tcpPingAvg !== undefined &&
            object.tcpPingAvg !== null) {
            message.tcpPingAvg = Number(object.tcpPingAvg);
        }
        else {
            message.tcpPingAvg = 0;
        }
        if (object.tcpPingVar !== undefined &&
            object.tcpPingVar !== null) {
            message.tcpPingVar = Number(object.tcpPingVar);
        }
        else {
            message.tcpPingVar = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePing);
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        else {
            message.timestamp = 0;
        }
        if (object.good !== undefined && object.good !== null) {
            message.good = object.good;
        }
        else {
            message.good = 0;
        }
        if (object.late !== undefined && object.late !== null) {
            message.late = object.late;
        }
        else {
            message.late = 0;
        }
        if (object.lost !== undefined && object.lost !== null) {
            message.lost = object.lost;
        }
        else {
            message.lost = 0;
        }
        if (object.resync !== undefined && object.resync !== null) {
            message.resync = object.resync;
        }
        else {
            message.resync = 0;
        }
        if (object.udpPackets !== undefined &&
            object.udpPackets !== null) {
            message.udpPackets = object.udpPackets;
        }
        else {
            message.udpPackets = 0;
        }
        if (object.tcpPackets !== undefined &&
            object.tcpPackets !== null) {
            message.tcpPackets = object.tcpPackets;
        }
        else {
            message.tcpPackets = 0;
        }
        if (object.udpPingAvg !== undefined &&
            object.udpPingAvg !== null) {
            message.udpPingAvg = object.udpPingAvg;
        }
        else {
            message.udpPingAvg = 0;
        }
        if (object.udpPingVar !== undefined &&
            object.udpPingVar !== null) {
            message.udpPingVar = object.udpPingVar;
        }
        else {
            message.udpPingVar = 0;
        }
        if (object.tcpPingAvg !== undefined &&
            object.tcpPingAvg !== null) {
            message.tcpPingAvg = object.tcpPingAvg;
        }
        else {
            message.tcpPingAvg = 0;
        }
        if (object.tcpPingVar !== undefined &&
            object.tcpPingVar !== null) {
            message.tcpPingVar = object.tcpPingVar;
        }
        else {
            message.tcpPingVar = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = message.timestamp);
        message.good !== undefined && (obj.good = message.good);
        message.late !== undefined && (obj.late = message.late);
        message.lost !== undefined && (obj.lost = message.lost);
        message.resync !== undefined && (obj.resync = message.resync);
        message.udpPackets !== undefined &&
            (obj.udpPackets = message.udpPackets);
        message.tcpPackets !== undefined &&
            (obj.tcpPackets = message.tcpPackets);
        message.udpPingAvg !== undefined &&
            (obj.udpPingAvg = message.udpPingAvg);
        message.udpPingVar !== undefined &&
            (obj.udpPingVar = message.udpPingVar);
        message.tcpPingAvg !== undefined &&
            (obj.tcpPingAvg = message.tcpPingAvg);
        message.tcpPingVar !== undefined &&
            (obj.tcpPingVar = message.tcpPingVar);
        return obj;
    },
};
exports.Reject = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).int32(message.type);
        writer.uint32(18).string(message.reason);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseReject);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseReject);
        if (object.type !== undefined && object.type !== null) {
            message.type = reject_RejectTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        else {
            message.reason = '';
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseReject);
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = reject_RejectTypeToJSON(message.type));
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
};
exports.ServerSync = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.session);
        writer.uint32(16).uint32(message.maxBandwidth);
        writer.uint32(26).string(message.welcomeText);
        writer.uint32(32).uint64(message.permissions);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseServerSync);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = reader.uint32();
                    break;
                case 2:
                    message.maxBandwidth = reader.uint32();
                    break;
                case 3:
                    message.welcomeText = reader.string();
                    break;
                case 4:
                    message.permissions = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseServerSync);
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.maxBandwidth !== undefined &&
            object.maxBandwidth !== null) {
            message.maxBandwidth = Number(object.maxBandwidth);
        }
        else {
            message.maxBandwidth = 0;
        }
        if (object.welcomeText !== undefined &&
            object.welcomeText !== null) {
            message.welcomeText = String(object.welcomeText);
        }
        else {
            message.welcomeText = '';
        }
        if (object.permissions !== undefined &&
            object.permissions !== null) {
            message.permissions = Number(object.permissions);
        }
        else {
            message.permissions = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseServerSync);
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.maxBandwidth !== undefined &&
            object.maxBandwidth !== null) {
            message.maxBandwidth = object.maxBandwidth;
        }
        else {
            message.maxBandwidth = 0;
        }
        if (object.welcomeText !== undefined &&
            object.welcomeText !== null) {
            message.welcomeText = object.welcomeText;
        }
        else {
            message.welcomeText = '';
        }
        if (object.permissions !== undefined &&
            object.permissions !== null) {
            message.permissions = object.permissions;
        }
        else {
            message.permissions = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        message.maxBandwidth !== undefined &&
            (obj.maxBandwidth = message.maxBandwidth);
        message.welcomeText !== undefined &&
            (obj.welcomeText = message.welcomeText);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions);
        return obj;
    },
};
exports.ChannelRemove = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.channelId);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChannelRemove);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChannelRemove);
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseChannelRemove);
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        return obj;
    },
};
exports.ChannelState = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.channelId);
        writer.uint32(16).uint32(message.parent);
        writer.uint32(26).string(message.name);
        writer.uint32(34).fork();
        for (const v of message.links) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(42).string(message.description);
        writer.uint32(50).fork();
        for (const v of message.linksAdd) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.linksRemove) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(64).bool(message.temporary);
        writer.uint32(72).int32(message.position);
        writer.uint32(82).bytes(message.descriptionHash);
        writer.uint32(88).uint32(message.maxUsers);
        writer.uint32(96).bool(message.isEnterRestricted);
        writer.uint32(104).bool(message.canEnter);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseChannelState);
        message.links = [];
        message.linksAdd = [];
        message.linksRemove = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.uint32();
                    break;
                case 2:
                    message.parent = reader.uint32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.links.push(reader.uint32());
                        }
                    }
                    else {
                        message.links.push(reader.uint32());
                    }
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.linksAdd.push(reader.uint32());
                        }
                    }
                    else {
                        message.linksAdd.push(reader.uint32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.linksRemove.push(reader.uint32());
                        }
                    }
                    else {
                        message.linksRemove.push(reader.uint32());
                    }
                    break;
                case 8:
                    message.temporary = reader.bool();
                    break;
                case 9:
                    message.position = reader.int32();
                    break;
                case 10:
                    message.descriptionHash = reader.bytes();
                    break;
                case 11:
                    message.maxUsers = reader.uint32();
                    break;
                case 12:
                    message.isEnterRestricted = reader.bool();
                    break;
                case 13:
                    message.canEnter = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseChannelState);
        message.links = [];
        message.linksAdd = [];
        message.linksRemove = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.parent !== undefined && object.parent !== null) {
            message.parent = Number(object.parent);
        }
        else {
            message.parent = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(Number(e));
            }
        }
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = '';
        }
        if (object.linksAdd !== undefined && object.linksAdd !== null) {
            for (const e of object.linksAdd) {
                message.linksAdd.push(Number(e));
            }
        }
        if (object.linksRemove !== undefined &&
            object.linksRemove !== null) {
            for (const e of object.linksRemove) {
                message.linksRemove.push(Number(e));
            }
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = Boolean(object.temporary);
        }
        else {
            message.temporary = false;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = Number(object.position);
        }
        else {
            message.position = 0;
        }
        if (object.descriptionHash !== undefined &&
            object.descriptionHash !== null) {
            message.descriptionHash = bytesFromBase64(object.descriptionHash);
        }
        if (object.maxUsers !== undefined && object.maxUsers !== null) {
            message.maxUsers = Number(object.maxUsers);
        }
        else {
            message.maxUsers = 0;
        }
        if (object.isEnterRestricted !== undefined &&
            object.isEnterRestricted !== null) {
            message.isEnterRestricted = Boolean(object.isEnterRestricted);
        }
        else {
            message.isEnterRestricted = false;
        }
        if (object.canEnter !== undefined && object.canEnter !== null) {
            message.canEnter = Boolean(object.canEnter);
        }
        else {
            message.canEnter = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseChannelState);
        message.links = [];
        message.linksAdd = [];
        message.linksRemove = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.parent !== undefined && object.parent !== null) {
            message.parent = object.parent;
        }
        else {
            message.parent = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.links !== undefined && object.links !== null) {
            for (const e of object.links) {
                message.links.push(e);
            }
        }
        if (object.description !== undefined &&
            object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = '';
        }
        if (object.linksAdd !== undefined && object.linksAdd !== null) {
            for (const e of object.linksAdd) {
                message.linksAdd.push(e);
            }
        }
        if (object.linksRemove !== undefined &&
            object.linksRemove !== null) {
            for (const e of object.linksRemove) {
                message.linksRemove.push(e);
            }
        }
        if (object.temporary !== undefined && object.temporary !== null) {
            message.temporary = object.temporary;
        }
        else {
            message.temporary = false;
        }
        if (object.position !== undefined && object.position !== null) {
            message.position = object.position;
        }
        else {
            message.position = 0;
        }
        if (object.descriptionHash !== undefined &&
            object.descriptionHash !== null) {
            message.descriptionHash = object.descriptionHash;
        }
        else {
            message.descriptionHash = new Uint8Array();
        }
        if (object.maxUsers !== undefined && object.maxUsers !== null) {
            message.maxUsers = object.maxUsers;
        }
        else {
            message.maxUsers = 0;
        }
        if (object.isEnterRestricted !== undefined &&
            object.isEnterRestricted !== null) {
            message.isEnterRestricted = object.isEnterRestricted;
        }
        else {
            message.isEnterRestricted = false;
        }
        if (object.canEnter !== undefined && object.canEnter !== null) {
            message.canEnter = object.canEnter;
        }
        else {
            message.canEnter = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.parent !== undefined && (obj.parent = message.parent);
        message.name !== undefined && (obj.name = message.name);
        if (message.links) {
            obj.links = message.links.map((e) => e);
        }
        else {
            obj.links = [];
        }
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.linksAdd) {
            obj.linksAdd = message.linksAdd.map((e) => e);
        }
        else {
            obj.linksAdd = [];
        }
        if (message.linksRemove) {
            obj.linksRemove = message.linksRemove.map((e) => e);
        }
        else {
            obj.linksRemove = [];
        }
        message.temporary !== undefined &&
            (obj.temporary = message.temporary);
        message.position !== undefined &&
            (obj.position = message.position);
        message.descriptionHash !== undefined &&
            (obj.descriptionHash = base64FromBytes(message.descriptionHash !== undefined
                ? message.descriptionHash
                : new Uint8Array()));
        message.maxUsers !== undefined &&
            (obj.maxUsers = message.maxUsers);
        message.isEnterRestricted !== undefined &&
            (obj.isEnterRestricted = message.isEnterRestricted);
        message.canEnter !== undefined &&
            (obj.canEnter = message.canEnter);
        return obj;
    },
};
exports.UserRemove = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.session);
        writer.uint32(16).uint32(message.actor);
        writer.uint32(26).string(message.reason);
        writer.uint32(32).bool(message.ban);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserRemove);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = reader.uint32();
                    break;
                case 2:
                    message.actor = reader.uint32();
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                case 4:
                    message.ban = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserRemove);
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = Number(object.actor);
        }
        else {
            message.actor = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        else {
            message.reason = '';
        }
        if (object.ban !== undefined && object.ban !== null) {
            message.ban = Boolean(object.ban);
        }
        else {
            message.ban = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserRemove);
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = '';
        }
        if (object.ban !== undefined && object.ban !== null) {
            message.ban = object.ban;
        }
        else {
            message.ban = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        message.actor !== undefined && (obj.actor = message.actor);
        message.reason !== undefined && (obj.reason = message.reason);
        message.ban !== undefined && (obj.ban = message.ban);
        return obj;
    },
};
exports.UserState = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.session);
        writer.uint32(16).uint32(message.actor);
        writer.uint32(26).string(message.name);
        writer.uint32(32).uint32(message.userId);
        writer.uint32(40).uint32(message.channelId);
        writer.uint32(48).bool(message.mute);
        writer.uint32(56).bool(message.deaf);
        writer.uint32(64).bool(message.suppress);
        writer.uint32(72).bool(message.selfMute);
        writer.uint32(80).bool(message.selfDeaf);
        writer.uint32(90).bytes(message.texture);
        writer.uint32(98).bytes(message.pluginContext);
        writer.uint32(106).string(message.pluginIdentity);
        writer.uint32(114).string(message.comment);
        writer.uint32(122).string(message.hash);
        writer.uint32(130).bytes(message.commentHash);
        writer.uint32(138).bytes(message.textureHash);
        writer.uint32(144).bool(message.prioritySpeaker);
        writer.uint32(152).bool(message.recording);
        for (const v of message.temporaryAccessTokens) {
            writer.uint32(162).string(v);
        }
        writer.uint32(170).fork();
        for (const v of message.listeningChannelAdd) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(178).fork();
        for (const v of message.listeningChannelRemove) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserState);
        message.temporaryAccessTokens = [];
        message.listeningChannelAdd = [];
        message.listeningChannelRemove = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = reader.uint32();
                    break;
                case 2:
                    message.actor = reader.uint32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.userId = reader.uint32();
                    break;
                case 5:
                    message.channelId = reader.uint32();
                    break;
                case 6:
                    message.mute = reader.bool();
                    break;
                case 7:
                    message.deaf = reader.bool();
                    break;
                case 8:
                    message.suppress = reader.bool();
                    break;
                case 9:
                    message.selfMute = reader.bool();
                    break;
                case 10:
                    message.selfDeaf = reader.bool();
                    break;
                case 11:
                    message.texture = reader.bytes();
                    break;
                case 12:
                    message.pluginContext = reader.bytes();
                    break;
                case 13:
                    message.pluginIdentity = reader.string();
                    break;
                case 14:
                    message.comment = reader.string();
                    break;
                case 15:
                    message.hash = reader.string();
                    break;
                case 16:
                    message.commentHash = reader.bytes();
                    break;
                case 17:
                    message.textureHash = reader.bytes();
                    break;
                case 18:
                    message.prioritySpeaker = reader.bool();
                    break;
                case 19:
                    message.recording = reader.bool();
                    break;
                case 20:
                    message.temporaryAccessTokens.push(reader.string());
                    break;
                case 21:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.listeningChannelAdd.push(reader.uint32());
                        }
                    }
                    else {
                        message.listeningChannelAdd.push(reader.uint32());
                    }
                    break;
                case 22:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.listeningChannelRemove.push(reader.uint32());
                        }
                    }
                    else {
                        message.listeningChannelRemove.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserState);
        message.temporaryAccessTokens = [];
        message.listeningChannelAdd = [];
        message.listeningChannelRemove = [];
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = Number(object.actor);
        }
        else {
            message.actor = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = Number(object.userId);
        }
        else {
            message.userId = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = Boolean(object.mute);
        }
        else {
            message.mute = false;
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = Boolean(object.deaf);
        }
        else {
            message.deaf = false;
        }
        if (object.suppress !== undefined && object.suppress !== null) {
            message.suppress = Boolean(object.suppress);
        }
        else {
            message.suppress = false;
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = Boolean(object.selfMute);
        }
        else {
            message.selfMute = false;
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = Boolean(object.selfDeaf);
        }
        else {
            message.selfDeaf = false;
        }
        if (object.texture !== undefined && object.texture !== null) {
            message.texture = bytesFromBase64(object.texture);
        }
        if (object.pluginContext !== undefined &&
            object.pluginContext !== null) {
            message.pluginContext = bytesFromBase64(object.pluginContext);
        }
        if (object.pluginIdentity !== undefined &&
            object.pluginIdentity !== null) {
            message.pluginIdentity = String(object.pluginIdentity);
        }
        else {
            message.pluginIdentity = '';
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = String(object.comment);
        }
        else {
            message.comment = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = '';
        }
        if (object.commentHash !== undefined &&
            object.commentHash !== null) {
            message.commentHash = bytesFromBase64(object.commentHash);
        }
        if (object.textureHash !== undefined &&
            object.textureHash !== null) {
            message.textureHash = bytesFromBase64(object.textureHash);
        }
        if (object.prioritySpeaker !== undefined &&
            object.prioritySpeaker !== null) {
            message.prioritySpeaker = Boolean(object.prioritySpeaker);
        }
        else {
            message.prioritySpeaker = false;
        }
        if (object.recording !== undefined && object.recording !== null) {
            message.recording = Boolean(object.recording);
        }
        else {
            message.recording = false;
        }
        if (object.temporaryAccessTokens !== undefined &&
            object.temporaryAccessTokens !== null) {
            for (const e of object.temporaryAccessTokens) {
                message.temporaryAccessTokens.push(String(e));
            }
        }
        if (object.listeningChannelAdd !== undefined &&
            object.listeningChannelAdd !== null) {
            for (const e of object.listeningChannelAdd) {
                message.listeningChannelAdd.push(Number(e));
            }
        }
        if (object.listeningChannelRemove !== undefined &&
            object.listeningChannelRemove !== null) {
            for (const e of object.listeningChannelRemove) {
                message.listeningChannelRemove.push(Number(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserState);
        message.temporaryAccessTokens = [];
        message.listeningChannelAdd = [];
        message.listeningChannelRemove = [];
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.mute !== undefined && object.mute !== null) {
            message.mute = object.mute;
        }
        else {
            message.mute = false;
        }
        if (object.deaf !== undefined && object.deaf !== null) {
            message.deaf = object.deaf;
        }
        else {
            message.deaf = false;
        }
        if (object.suppress !== undefined && object.suppress !== null) {
            message.suppress = object.suppress;
        }
        else {
            message.suppress = false;
        }
        if (object.selfMute !== undefined && object.selfMute !== null) {
            message.selfMute = object.selfMute;
        }
        else {
            message.selfMute = false;
        }
        if (object.selfDeaf !== undefined && object.selfDeaf !== null) {
            message.selfDeaf = object.selfDeaf;
        }
        else {
            message.selfDeaf = false;
        }
        if (object.texture !== undefined && object.texture !== null) {
            message.texture = object.texture;
        }
        else {
            message.texture = new Uint8Array();
        }
        if (object.pluginContext !== undefined &&
            object.pluginContext !== null) {
            message.pluginContext = object.pluginContext;
        }
        else {
            message.pluginContext = new Uint8Array();
        }
        if (object.pluginIdentity !== undefined &&
            object.pluginIdentity !== null) {
            message.pluginIdentity = object.pluginIdentity;
        }
        else {
            message.pluginIdentity = '';
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = object.comment;
        }
        else {
            message.comment = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = '';
        }
        if (object.commentHash !== undefined &&
            object.commentHash !== null) {
            message.commentHash = object.commentHash;
        }
        else {
            message.commentHash = new Uint8Array();
        }
        if (object.textureHash !== undefined &&
            object.textureHash !== null) {
            message.textureHash = object.textureHash;
        }
        else {
            message.textureHash = new Uint8Array();
        }
        if (object.prioritySpeaker !== undefined &&
            object.prioritySpeaker !== null) {
            message.prioritySpeaker = object.prioritySpeaker;
        }
        else {
            message.prioritySpeaker = false;
        }
        if (object.recording !== undefined && object.recording !== null) {
            message.recording = object.recording;
        }
        else {
            message.recording = false;
        }
        if (object.temporaryAccessTokens !== undefined &&
            object.temporaryAccessTokens !== null) {
            for (const e of object.temporaryAccessTokens) {
                message.temporaryAccessTokens.push(e);
            }
        }
        if (object.listeningChannelAdd !== undefined &&
            object.listeningChannelAdd !== null) {
            for (const e of object.listeningChannelAdd) {
                message.listeningChannelAdd.push(e);
            }
        }
        if (object.listeningChannelRemove !== undefined &&
            object.listeningChannelRemove !== null) {
            for (const e of object.listeningChannelRemove) {
                message.listeningChannelRemove.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        message.actor !== undefined && (obj.actor = message.actor);
        message.name !== undefined && (obj.name = message.name);
        message.userId !== undefined && (obj.userId = message.userId);
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.mute !== undefined && (obj.mute = message.mute);
        message.deaf !== undefined && (obj.deaf = message.deaf);
        message.suppress !== undefined &&
            (obj.suppress = message.suppress);
        message.selfMute !== undefined &&
            (obj.selfMute = message.selfMute);
        message.selfDeaf !== undefined &&
            (obj.selfDeaf = message.selfDeaf);
        message.texture !== undefined &&
            (obj.texture = base64FromBytes(message.texture !== undefined
                ? message.texture
                : new Uint8Array()));
        message.pluginContext !== undefined &&
            (obj.pluginContext = base64FromBytes(message.pluginContext !== undefined
                ? message.pluginContext
                : new Uint8Array()));
        message.pluginIdentity !== undefined &&
            (obj.pluginIdentity = message.pluginIdentity);
        message.comment !== undefined && (obj.comment = message.comment);
        message.hash !== undefined && (obj.hash = message.hash);
        message.commentHash !== undefined &&
            (obj.commentHash = base64FromBytes(message.commentHash !== undefined
                ? message.commentHash
                : new Uint8Array()));
        message.textureHash !== undefined &&
            (obj.textureHash = base64FromBytes(message.textureHash !== undefined
                ? message.textureHash
                : new Uint8Array()));
        message.prioritySpeaker !== undefined &&
            (obj.prioritySpeaker = message.prioritySpeaker);
        message.recording !== undefined &&
            (obj.recording = message.recording);
        if (message.temporaryAccessTokens) {
            obj.temporaryAccessTokens = message.temporaryAccessTokens.map((e) => e);
        }
        else {
            obj.temporaryAccessTokens = [];
        }
        if (message.listeningChannelAdd) {
            obj.listeningChannelAdd = message.listeningChannelAdd.map((e) => e);
        }
        else {
            obj.listeningChannelAdd = [];
        }
        if (message.listeningChannelRemove) {
            obj.listeningChannelRemove = message.listeningChannelRemove.map((e) => e);
        }
        else {
            obj.listeningChannelRemove = [];
        }
        return obj;
    },
};
exports.BanList = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        for (const v of message.bans) {
            exports.BanList_BanEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        writer.uint32(16).bool(message.query);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBanList);
        message.bans = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bans.push(exports.BanList_BanEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.query = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBanList);
        message.bans = [];
        if (object.bans !== undefined && object.bans !== null) {
            for (const e of object.bans) {
                message.bans.push(exports.BanList_BanEntry.fromJSON(e));
            }
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = Boolean(object.query);
        }
        else {
            message.query = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBanList);
        message.bans = [];
        if (object.bans !== undefined && object.bans !== null) {
            for (const e of object.bans) {
                message.bans.push(exports.BanList_BanEntry.fromPartial(e));
            }
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.bans) {
            obj.bans = message.bans.map((e) => e ? exports.BanList_BanEntry.toJSON(e) : undefined);
        }
        else {
            obj.bans = [];
        }
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
};
exports.BanList_BanEntry = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).bytes(message.address);
        writer.uint32(16).uint32(message.mask);
        writer.uint32(26).string(message.name);
        writer.uint32(34).string(message.hash);
        writer.uint32(42).string(message.reason);
        writer.uint32(50).string(message.start);
        writer.uint32(56).uint32(message.duration);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBanList_BanEntry);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.mask = reader.uint32();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.hash = reader.string();
                    break;
                case 5:
                    message.reason = reader.string();
                    break;
                case 6:
                    message.start = reader.string();
                    break;
                case 7:
                    message.duration = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBanList_BanEntry);
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.mask !== undefined && object.mask !== null) {
            message.mask = Number(object.mask);
        }
        else {
            message.mask = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = '';
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        else {
            message.reason = '';
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = String(object.start);
        }
        else {
            message.start = '';
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Number(object.duration);
        }
        else {
            message.duration = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBanList_BanEntry);
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = new Uint8Array();
        }
        if (object.mask !== undefined && object.mask !== null) {
            message.mask = object.mask;
        }
        else {
            message.mask = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = '';
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = '';
        }
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        else {
            message.start = '';
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = object.duration;
        }
        else {
            message.duration = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined
                ? message.address
                : new Uint8Array()));
        message.mask !== undefined && (obj.mask = message.mask);
        message.name !== undefined && (obj.name = message.name);
        message.hash !== undefined && (obj.hash = message.hash);
        message.reason !== undefined && (obj.reason = message.reason);
        message.start !== undefined && (obj.start = message.start);
        message.duration !== undefined &&
            (obj.duration = message.duration);
        return obj;
    },
};
exports.TextMessage = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.actor);
        writer.uint32(18).fork();
        for (const v of message.session) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.channelId) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(34).fork();
        for (const v of message.treeId) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(42).string(message.message);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextMessage);
        message.session = [];
        message.channelId = [];
        message.treeId = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.actor = reader.uint32();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.session.push(reader.uint32());
                        }
                    }
                    else {
                        message.session.push(reader.uint32());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.channelId.push(reader.uint32());
                        }
                    }
                    else {
                        message.channelId.push(reader.uint32());
                    }
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.treeId.push(reader.uint32());
                        }
                    }
                    else {
                        message.treeId.push(reader.uint32());
                    }
                    break;
                case 5:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTextMessage);
        message.session = [];
        message.channelId = [];
        message.treeId = [];
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = Number(object.actor);
        }
        else {
            message.actor = 0;
        }
        if (object.session !== undefined && object.session !== null) {
            for (const e of object.session) {
                message.session.push(Number(e));
            }
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            for (const e of object.channelId) {
                message.channelId.push(Number(e));
            }
        }
        if (object.treeId !== undefined && object.treeId !== null) {
            for (const e of object.treeId) {
                message.treeId.push(Number(e));
            }
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = '';
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTextMessage);
        message.session = [];
        message.channelId = [];
        message.treeId = [];
        if (object.actor !== undefined && object.actor !== null) {
            message.actor = object.actor;
        }
        else {
            message.actor = 0;
        }
        if (object.session !== undefined && object.session !== null) {
            for (const e of object.session) {
                message.session.push(e);
            }
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            for (const e of object.channelId) {
                message.channelId.push(e);
            }
        }
        if (object.treeId !== undefined && object.treeId !== null) {
            for (const e of object.treeId) {
                message.treeId.push(e);
            }
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.actor !== undefined && (obj.actor = message.actor);
        if (message.session) {
            obj.session = message.session.map((e) => e);
        }
        else {
            obj.session = [];
        }
        if (message.channelId) {
            obj.channelId = message.channelId.map((e) => e);
        }
        else {
            obj.channelId = [];
        }
        if (message.treeId) {
            obj.treeId = message.treeId.map((e) => e);
        }
        else {
            obj.treeId = [];
        }
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
};
exports.PermissionDenied = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.permission);
        writer.uint32(16).uint32(message.channelId);
        writer.uint32(24).uint32(message.session);
        writer.uint32(34).string(message.reason);
        writer.uint32(40).int32(message.type);
        writer.uint32(50).string(message.name);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermissionDenied);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = reader.uint32();
                    break;
                case 2:
                    message.channelId = reader.uint32();
                    break;
                case 3:
                    message.session = reader.uint32();
                    break;
                case 4:
                    message.reason = reader.string();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePermissionDenied);
        if (object.permission !== undefined &&
            object.permission !== null) {
            message.permission = Number(object.permission);
        }
        else {
            message.permission = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = String(object.reason);
        }
        else {
            message.reason = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = permissionDenied_DenyTypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePermissionDenied);
        if (object.permission !== undefined &&
            object.permission !== null) {
            message.permission = object.permission;
        }
        else {
            message.permission = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.reason !== undefined && object.reason !== null) {
            message.reason = object.reason;
        }
        else {
            message.reason = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined &&
            (obj.permission = message.permission);
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.session !== undefined && (obj.session = message.session);
        message.reason !== undefined && (obj.reason = message.reason);
        message.type !== undefined &&
            (obj.type = permissionDenied_DenyTypeToJSON(message.type));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
};
exports.ACL = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.channelId);
        writer.uint32(16).bool(message.inheritAcls);
        for (const v of message.groups) {
            exports.ACL_ChanGroup.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.acls) {
            exports.ACL_ChanACL.encode(v, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(40).bool(message.query);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseACL);
        message.groups = [];
        message.acls = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.uint32();
                    break;
                case 2:
                    message.inheritAcls = reader.bool();
                    break;
                case 3:
                    message.groups.push(exports.ACL_ChanGroup.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.acls.push(exports.ACL_ChanACL.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.query = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseACL);
        message.groups = [];
        message.acls = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.inheritAcls !== undefined &&
            object.inheritAcls !== null) {
            message.inheritAcls = Boolean(object.inheritAcls);
        }
        else {
            message.inheritAcls = false;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(exports.ACL_ChanGroup.fromJSON(e));
            }
        }
        if (object.acls !== undefined && object.acls !== null) {
            for (const e of object.acls) {
                message.acls.push(exports.ACL_ChanACL.fromJSON(e));
            }
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = Boolean(object.query);
        }
        else {
            message.query = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseACL);
        message.groups = [];
        message.acls = [];
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.inheritAcls !== undefined &&
            object.inheritAcls !== null) {
            message.inheritAcls = object.inheritAcls;
        }
        else {
            message.inheritAcls = false;
        }
        if (object.groups !== undefined && object.groups !== null) {
            for (const e of object.groups) {
                message.groups.push(exports.ACL_ChanGroup.fromPartial(e));
            }
        }
        if (object.acls !== undefined && object.acls !== null) {
            for (const e of object.acls) {
                message.acls.push(exports.ACL_ChanACL.fromPartial(e));
            }
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        else {
            message.query = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.inheritAcls !== undefined &&
            (obj.inheritAcls = message.inheritAcls);
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? exports.ACL_ChanGroup.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        if (message.acls) {
            obj.acls = message.acls.map((e) => e ? exports.ACL_ChanACL.toJSON(e) : undefined);
        }
        else {
            obj.acls = [];
        }
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
};
exports.ACL_ChanGroup = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).string(message.name);
        writer.uint32(16).bool(message.inherited);
        writer.uint32(24).bool(message.inherit);
        writer.uint32(32).bool(message.inheritable);
        writer.uint32(42).fork();
        for (const v of message.add) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(50).fork();
        for (const v of message.remove) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.inheritedMembers) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseACL_ChanGroup);
        message.add = [];
        message.remove = [];
        message.inheritedMembers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inherited = reader.bool();
                    break;
                case 3:
                    message.inherit = reader.bool();
                    break;
                case 4:
                    message.inheritable = reader.bool();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.add.push(reader.uint32());
                        }
                    }
                    else {
                        message.add.push(reader.uint32());
                    }
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.remove.push(reader.uint32());
                        }
                    }
                    else {
                        message.remove.push(reader.uint32());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.inheritedMembers.push(reader.uint32());
                        }
                    }
                    else {
                        message.inheritedMembers.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseACL_ChanGroup);
        message.add = [];
        message.remove = [];
        message.inheritedMembers = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.inherited !== undefined && object.inherited !== null) {
            message.inherited = Boolean(object.inherited);
        }
        else {
            message.inherited = false;
        }
        if (object.inherit !== undefined && object.inherit !== null) {
            message.inherit = Boolean(object.inherit);
        }
        else {
            message.inherit = false;
        }
        if (object.inheritable !== undefined &&
            object.inheritable !== null) {
            message.inheritable = Boolean(object.inheritable);
        }
        else {
            message.inheritable = false;
        }
        if (object.add !== undefined && object.add !== null) {
            for (const e of object.add) {
                message.add.push(Number(e));
            }
        }
        if (object.remove !== undefined && object.remove !== null) {
            for (const e of object.remove) {
                message.remove.push(Number(e));
            }
        }
        if (object.inheritedMembers !== undefined &&
            object.inheritedMembers !== null) {
            for (const e of object.inheritedMembers) {
                message.inheritedMembers.push(Number(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseACL_ChanGroup);
        message.add = [];
        message.remove = [];
        message.inheritedMembers = [];
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.inherited !== undefined && object.inherited !== null) {
            message.inherited = object.inherited;
        }
        else {
            message.inherited = false;
        }
        if (object.inherit !== undefined && object.inherit !== null) {
            message.inherit = object.inherit;
        }
        else {
            message.inherit = false;
        }
        if (object.inheritable !== undefined &&
            object.inheritable !== null) {
            message.inheritable = object.inheritable;
        }
        else {
            message.inheritable = false;
        }
        if (object.add !== undefined && object.add !== null) {
            for (const e of object.add) {
                message.add.push(e);
            }
        }
        if (object.remove !== undefined && object.remove !== null) {
            for (const e of object.remove) {
                message.remove.push(e);
            }
        }
        if (object.inheritedMembers !== undefined &&
            object.inheritedMembers !== null) {
            for (const e of object.inheritedMembers) {
                message.inheritedMembers.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.inherited !== undefined &&
            (obj.inherited = message.inherited);
        message.inherit !== undefined && (obj.inherit = message.inherit);
        message.inheritable !== undefined &&
            (obj.inheritable = message.inheritable);
        if (message.add) {
            obj.add = message.add.map((e) => e);
        }
        else {
            obj.add = [];
        }
        if (message.remove) {
            obj.remove = message.remove.map((e) => e);
        }
        else {
            obj.remove = [];
        }
        if (message.inheritedMembers) {
            obj.inheritedMembers = message.inheritedMembers.map((e) => e);
        }
        else {
            obj.inheritedMembers = [];
        }
        return obj;
    },
};
exports.ACL_ChanACL = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).bool(message.applyHere);
        writer.uint32(16).bool(message.applySubs);
        writer.uint32(24).bool(message.inherited);
        writer.uint32(32).uint32(message.userId);
        writer.uint32(42).string(message.group);
        writer.uint32(48).uint32(message.grant);
        writer.uint32(56).uint32(message.deny);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseACL_ChanACL);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.applyHere = reader.bool();
                    break;
                case 2:
                    message.applySubs = reader.bool();
                    break;
                case 3:
                    message.inherited = reader.bool();
                    break;
                case 4:
                    message.userId = reader.uint32();
                    break;
                case 5:
                    message.group = reader.string();
                    break;
                case 6:
                    message.grant = reader.uint32();
                    break;
                case 7:
                    message.deny = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseACL_ChanACL);
        if (object.applyHere !== undefined && object.applyHere !== null) {
            message.applyHere = Boolean(object.applyHere);
        }
        else {
            message.applyHere = false;
        }
        if (object.applySubs !== undefined && object.applySubs !== null) {
            message.applySubs = Boolean(object.applySubs);
        }
        else {
            message.applySubs = false;
        }
        if (object.inherited !== undefined && object.inherited !== null) {
            message.inherited = Boolean(object.inherited);
        }
        else {
            message.inherited = false;
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = Number(object.userId);
        }
        else {
            message.userId = 0;
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = String(object.group);
        }
        else {
            message.group = '';
        }
        if (object.grant !== undefined && object.grant !== null) {
            message.grant = Number(object.grant);
        }
        else {
            message.grant = 0;
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = Number(object.deny);
        }
        else {
            message.deny = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseACL_ChanACL);
        if (object.applyHere !== undefined && object.applyHere !== null) {
            message.applyHere = object.applyHere;
        }
        else {
            message.applyHere = false;
        }
        if (object.applySubs !== undefined && object.applySubs !== null) {
            message.applySubs = object.applySubs;
        }
        else {
            message.applySubs = false;
        }
        if (object.inherited !== undefined && object.inherited !== null) {
            message.inherited = object.inherited;
        }
        else {
            message.inherited = false;
        }
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = 0;
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = object.group;
        }
        else {
            message.group = '';
        }
        if (object.grant !== undefined && object.grant !== null) {
            message.grant = object.grant;
        }
        else {
            message.grant = 0;
        }
        if (object.deny !== undefined && object.deny !== null) {
            message.deny = object.deny;
        }
        else {
            message.deny = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.applyHere !== undefined &&
            (obj.applyHere = message.applyHere);
        message.applySubs !== undefined &&
            (obj.applySubs = message.applySubs);
        message.inherited !== undefined &&
            (obj.inherited = message.inherited);
        message.userId !== undefined && (obj.userId = message.userId);
        message.group !== undefined && (obj.group = message.group);
        message.grant !== undefined && (obj.grant = message.grant);
        message.deny !== undefined && (obj.deny = message.deny);
        return obj;
    },
};
exports.QueryUsers = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint32(v);
        }
        writer.ldelim();
        for (const v of message.names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryUsers);
        message.ids = [];
        message.names = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint32());
                        }
                    }
                    else {
                        message.ids.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryUsers);
        message.ids = [];
        message.names = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(Number(e));
            }
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(String(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryUsers);
        message.ids = [];
        message.names = [];
        if (object.ids !== undefined && object.ids !== null) {
            for (const e of object.ids) {
                message.ids.push(e);
            }
        }
        if (object.names !== undefined && object.names !== null) {
            for (const e of object.names) {
                message.names.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        if (message.names) {
            obj.names = message.names.map((e) => e);
        }
        else {
            obj.names = [];
        }
        return obj;
    },
};
exports.CryptSetup = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).bytes(message.key);
        writer.uint32(18).bytes(message.clientNonce);
        writer.uint32(26).bytes(message.serverNonce);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCryptSetup);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.clientNonce = reader.bytes();
                    break;
                case 3:
                    message.serverNonce = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCryptSetup);
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.clientNonce !== undefined &&
            object.clientNonce !== null) {
            message.clientNonce = bytesFromBase64(object.clientNonce);
        }
        if (object.serverNonce !== undefined &&
            object.serverNonce !== null) {
            message.serverNonce = bytesFromBase64(object.serverNonce);
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCryptSetup);
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = new Uint8Array();
        }
        if (object.clientNonce !== undefined &&
            object.clientNonce !== null) {
            message.clientNonce = object.clientNonce;
        }
        else {
            message.clientNonce = new Uint8Array();
        }
        if (object.serverNonce !== undefined &&
            object.serverNonce !== null) {
            message.serverNonce = object.serverNonce;
        }
        else {
            message.serverNonce = new Uint8Array();
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.clientNonce !== undefined &&
            (obj.clientNonce = base64FromBytes(message.clientNonce !== undefined
                ? message.clientNonce
                : new Uint8Array()));
        message.serverNonce !== undefined &&
            (obj.serverNonce = base64FromBytes(message.serverNonce !== undefined
                ? message.serverNonce
                : new Uint8Array()));
        return obj;
    },
};
exports.ContextActionModify = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).string(message.action);
        writer.uint32(18).string(message.text);
        writer.uint32(24).uint32(message.context);
        writer.uint32(32).int32(message.operation);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContextActionModify);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.action = reader.string();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.context = reader.uint32();
                    break;
                case 4:
                    message.operation = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContextActionModify);
        if (object.action !== undefined && object.action !== null) {
            message.action = String(object.action);
        }
        else {
            message.action = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = String(object.text);
        }
        else {
            message.text = '';
        }
        if (object.context !== undefined && object.context !== null) {
            message.context = Number(object.context);
        }
        else {
            message.context = 0;
        }
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = contextActionModify_OperationFromJSON(object.operation);
        }
        else {
            message.operation = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseContextActionModify);
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        else {
            message.action = '';
        }
        if (object.text !== undefined && object.text !== null) {
            message.text = object.text;
        }
        else {
            message.text = '';
        }
        if (object.context !== undefined && object.context !== null) {
            message.context = object.context;
        }
        else {
            message.context = 0;
        }
        if (object.operation !== undefined && object.operation !== null) {
            message.operation = object.operation;
        }
        else {
            message.operation = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.action !== undefined && (obj.action = message.action);
        message.text !== undefined && (obj.text = message.text);
        message.context !== undefined && (obj.context = message.context);
        message.operation !== undefined &&
            (obj.operation = contextActionModify_OperationToJSON(message.operation));
        return obj;
    },
};
exports.ContextAction = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.session);
        writer.uint32(16).uint32(message.channelId);
        writer.uint32(26).string(message.action);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContextAction);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = reader.uint32();
                    break;
                case 2:
                    message.channelId = reader.uint32();
                    break;
                case 3:
                    message.action = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContextAction);
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = String(object.action);
        }
        else {
            message.action = '';
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseContextAction);
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.action !== undefined && object.action !== null) {
            message.action = object.action;
        }
        else {
            message.action = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.action !== undefined && (obj.action = message.action);
        return obj;
    },
};
exports.UserList = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        for (const v of message.users) {
            exports.UserList_User.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserList);
        message.users = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.users.push(exports.UserList_User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserList);
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(exports.UserList_User.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserList);
        message.users = [];
        if (object.users !== undefined && object.users !== null) {
            for (const e of object.users) {
                message.users.push(exports.UserList_User.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.users) {
            obj.users = message.users.map((e) => e ? exports.UserList_User.toJSON(e) : undefined);
        }
        else {
            obj.users = [];
        }
        return obj;
    },
};
exports.UserList_User = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.userId);
        writer.uint32(18).string(message.name);
        writer.uint32(26).string(message.lastSeen);
        writer.uint32(32).uint32(message.lastChannel);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserList_User);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.lastSeen = reader.string();
                    break;
                case 4:
                    message.lastChannel = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserList_User);
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = Number(object.userId);
        }
        else {
            message.userId = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.lastSeen !== undefined && object.lastSeen !== null) {
            message.lastSeen = String(object.lastSeen);
        }
        else {
            message.lastSeen = '';
        }
        if (object.lastChannel !== undefined &&
            object.lastChannel !== null) {
            message.lastChannel = Number(object.lastChannel);
        }
        else {
            message.lastChannel = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserList_User);
        if (object.userId !== undefined && object.userId !== null) {
            message.userId = object.userId;
        }
        else {
            message.userId = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.lastSeen !== undefined && object.lastSeen !== null) {
            message.lastSeen = object.lastSeen;
        }
        else {
            message.lastSeen = '';
        }
        if (object.lastChannel !== undefined &&
            object.lastChannel !== null) {
            message.lastChannel = object.lastChannel;
        }
        else {
            message.lastChannel = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.name !== undefined && (obj.name = message.name);
        message.lastSeen !== undefined &&
            (obj.lastSeen = message.lastSeen);
        message.lastChannel !== undefined &&
            (obj.lastChannel = message.lastChannel);
        return obj;
    },
};
exports.VoiceTarget = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.id);
        for (const v of message.targets) {
            exports.VoiceTarget_Target.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVoiceTarget);
        message.targets = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.targets.push(exports.VoiceTarget_Target.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVoiceTarget);
        message.targets = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(exports.VoiceTarget_Target.fromJSON(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVoiceTarget);
        message.targets = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.targets !== undefined && object.targets !== null) {
            for (const e of object.targets) {
                message.targets.push(exports.VoiceTarget_Target.fromPartial(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.targets) {
            obj.targets = message.targets.map((e) => e ? exports.VoiceTarget_Target.toJSON(e) : undefined);
        }
        else {
            obj.targets = [];
        }
        return obj;
    },
};
exports.VoiceTarget_Target = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.session) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(16).uint32(message.channelId);
        writer.uint32(26).string(message.group);
        writer.uint32(32).bool(message.links);
        writer.uint32(40).bool(message.children);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseVoiceTarget_Target);
        message.session = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.session.push(reader.uint32());
                        }
                    }
                    else {
                        message.session.push(reader.uint32());
                    }
                    break;
                case 2:
                    message.channelId = reader.uint32();
                    break;
                case 3:
                    message.group = reader.string();
                    break;
                case 4:
                    message.links = reader.bool();
                    break;
                case 5:
                    message.children = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseVoiceTarget_Target);
        message.session = [];
        if (object.session !== undefined && object.session !== null) {
            for (const e of object.session) {
                message.session.push(Number(e));
            }
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = String(object.group);
        }
        else {
            message.group = '';
        }
        if (object.links !== undefined && object.links !== null) {
            message.links = Boolean(object.links);
        }
        else {
            message.links = false;
        }
        if (object.children !== undefined && object.children !== null) {
            message.children = Boolean(object.children);
        }
        else {
            message.children = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseVoiceTarget_Target);
        message.session = [];
        if (object.session !== undefined && object.session !== null) {
            for (const e of object.session) {
                message.session.push(e);
            }
        }
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.group !== undefined && object.group !== null) {
            message.group = object.group;
        }
        else {
            message.group = '';
        }
        if (object.links !== undefined && object.links !== null) {
            message.links = object.links;
        }
        else {
            message.links = false;
        }
        if (object.children !== undefined && object.children !== null) {
            message.children = object.children;
        }
        else {
            message.children = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.session) {
            obj.session = message.session.map((e) => e);
        }
        else {
            obj.session = [];
        }
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.group !== undefined && (obj.group = message.group);
        message.links !== undefined && (obj.links = message.links);
        message.children !== undefined &&
            (obj.children = message.children);
        return obj;
    },
};
exports.PermissionQuery = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.channelId);
        writer.uint32(16).uint32(message.permissions);
        writer.uint32(24).bool(message.flush);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermissionQuery);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.uint32();
                    break;
                case 2:
                    message.permissions = reader.uint32();
                    break;
                case 3:
                    message.flush = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePermissionQuery);
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = Number(object.channelId);
        }
        else {
            message.channelId = 0;
        }
        if (object.permissions !== undefined &&
            object.permissions !== null) {
            message.permissions = Number(object.permissions);
        }
        else {
            message.permissions = 0;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = Boolean(object.flush);
        }
        else {
            message.flush = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePermissionQuery);
        if (object.channelId !== undefined && object.channelId !== null) {
            message.channelId = object.channelId;
        }
        else {
            message.channelId = 0;
        }
        if (object.permissions !== undefined &&
            object.permissions !== null) {
            message.permissions = object.permissions;
        }
        else {
            message.permissions = 0;
        }
        if (object.flush !== undefined && object.flush !== null) {
            message.flush = object.flush;
        }
        else {
            message.flush = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined &&
            (obj.channelId = message.channelId);
        message.permissions !== undefined &&
            (obj.permissions = message.permissions);
        message.flush !== undefined && (obj.flush = message.flush);
        return obj;
    },
};
exports.CodecVersion = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).int32(message.alpha);
        writer.uint32(16).int32(message.beta);
        writer.uint32(24).bool(message.preferAlpha);
        writer.uint32(32).bool(message.opus);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseCodecVersion);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alpha = reader.int32();
                    break;
                case 2:
                    message.beta = reader.int32();
                    break;
                case 3:
                    message.preferAlpha = reader.bool();
                    break;
                case 4:
                    message.opus = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseCodecVersion);
        if (object.alpha !== undefined && object.alpha !== null) {
            message.alpha = Number(object.alpha);
        }
        else {
            message.alpha = 0;
        }
        if (object.beta !== undefined && object.beta !== null) {
            message.beta = Number(object.beta);
        }
        else {
            message.beta = 0;
        }
        if (object.preferAlpha !== undefined &&
            object.preferAlpha !== null) {
            message.preferAlpha = Boolean(object.preferAlpha);
        }
        else {
            message.preferAlpha = false;
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = Boolean(object.opus);
        }
        else {
            message.opus = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseCodecVersion);
        if (object.alpha !== undefined && object.alpha !== null) {
            message.alpha = object.alpha;
        }
        else {
            message.alpha = 0;
        }
        if (object.beta !== undefined && object.beta !== null) {
            message.beta = object.beta;
        }
        else {
            message.beta = 0;
        }
        if (object.preferAlpha !== undefined &&
            object.preferAlpha !== null) {
            message.preferAlpha = object.preferAlpha;
        }
        else {
            message.preferAlpha = false;
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = object.opus;
        }
        else {
            message.opus = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.beta !== undefined && (obj.beta = message.beta);
        message.preferAlpha !== undefined &&
            (obj.preferAlpha = message.preferAlpha);
        message.opus !== undefined && (obj.opus = message.opus);
        return obj;
    },
};
exports.UserStats = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.session);
        writer.uint32(16).bool(message.statsOnly);
        for (const v of message.certificates) {
            writer.uint32(26).bytes(v);
        }
        if (message.fromClient !== undefined &&
            message.fromClient !== undefined) {
            exports.UserStats_Stats.encode(message.fromClient, writer.uint32(34).fork()).ldelim();
        }
        if (message.fromServer !== undefined &&
            message.fromServer !== undefined) {
            exports.UserStats_Stats.encode(message.fromServer, writer.uint32(42).fork()).ldelim();
        }
        writer.uint32(48).uint32(message.udpPackets);
        writer.uint32(56).uint32(message.tcpPackets);
        writer.uint32(69).float(message.udpPingAvg);
        writer.uint32(77).float(message.udpPingVar);
        writer.uint32(85).float(message.tcpPingAvg);
        writer.uint32(93).float(message.tcpPingVar);
        if (message.version !== undefined &&
            message.version !== undefined) {
            exports.Version.encode(message.version, writer.uint32(98).fork()).ldelim();
        }
        writer.uint32(106).fork();
        for (const v of message.celtVersions) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(114).bytes(message.address);
        writer.uint32(120).uint32(message.bandwidth);
        writer.uint32(128).uint32(message.onlinesecs);
        writer.uint32(136).uint32(message.idlesecs);
        writer.uint32(144).bool(message.strongCertificate);
        writer.uint32(152).bool(message.opus);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserStats);
        message.certificates = [];
        message.celtVersions = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.session = reader.uint32();
                    break;
                case 2:
                    message.statsOnly = reader.bool();
                    break;
                case 3:
                    message.certificates.push(reader.bytes());
                    break;
                case 4:
                    message.fromClient = exports.UserStats_Stats.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.fromServer = exports.UserStats_Stats.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.udpPackets = reader.uint32();
                    break;
                case 7:
                    message.tcpPackets = reader.uint32();
                    break;
                case 8:
                    message.udpPingAvg = reader.float();
                    break;
                case 9:
                    message.udpPingVar = reader.float();
                    break;
                case 10:
                    message.tcpPingAvg = reader.float();
                    break;
                case 11:
                    message.tcpPingVar = reader.float();
                    break;
                case 12:
                    message.version = exports.Version.decode(reader, reader.uint32());
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.celtVersions.push(reader.int32());
                        }
                    }
                    else {
                        message.celtVersions.push(reader.int32());
                    }
                    break;
                case 14:
                    message.address = reader.bytes();
                    break;
                case 15:
                    message.bandwidth = reader.uint32();
                    break;
                case 16:
                    message.onlinesecs = reader.uint32();
                    break;
                case 17:
                    message.idlesecs = reader.uint32();
                    break;
                case 18:
                    message.strongCertificate = reader.bool();
                    break;
                case 19:
                    message.opus = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserStats);
        message.certificates = [];
        message.celtVersions = [];
        if (object.session !== undefined && object.session !== null) {
            message.session = Number(object.session);
        }
        else {
            message.session = 0;
        }
        if (object.statsOnly !== undefined && object.statsOnly !== null) {
            message.statsOnly = Boolean(object.statsOnly);
        }
        else {
            message.statsOnly = false;
        }
        if (object.certificates !== undefined &&
            object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(bytesFromBase64(e));
            }
        }
        if (object.fromClient !== undefined &&
            object.fromClient !== null) {
            message.fromClient = exports.UserStats_Stats.fromJSON(object.fromClient);
        }
        else {
            message.fromClient = undefined;
        }
        if (object.fromServer !== undefined &&
            object.fromServer !== null) {
            message.fromServer = exports.UserStats_Stats.fromJSON(object.fromServer);
        }
        else {
            message.fromServer = undefined;
        }
        if (object.udpPackets !== undefined &&
            object.udpPackets !== null) {
            message.udpPackets = Number(object.udpPackets);
        }
        else {
            message.udpPackets = 0;
        }
        if (object.tcpPackets !== undefined &&
            object.tcpPackets !== null) {
            message.tcpPackets = Number(object.tcpPackets);
        }
        else {
            message.tcpPackets = 0;
        }
        if (object.udpPingAvg !== undefined &&
            object.udpPingAvg !== null) {
            message.udpPingAvg = Number(object.udpPingAvg);
        }
        else {
            message.udpPingAvg = 0;
        }
        if (object.udpPingVar !== undefined &&
            object.udpPingVar !== null) {
            message.udpPingVar = Number(object.udpPingVar);
        }
        else {
            message.udpPingVar = 0;
        }
        if (object.tcpPingAvg !== undefined &&
            object.tcpPingAvg !== null) {
            message.tcpPingAvg = Number(object.tcpPingAvg);
        }
        else {
            message.tcpPingAvg = 0;
        }
        if (object.tcpPingVar !== undefined &&
            object.tcpPingVar !== null) {
            message.tcpPingVar = Number(object.tcpPingVar);
        }
        else {
            message.tcpPingVar = 0;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.Version.fromJSON(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.celtVersions !== undefined &&
            object.celtVersions !== null) {
            for (const e of object.celtVersions) {
                message.celtVersions.push(Number(e));
            }
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = Number(object.bandwidth);
        }
        else {
            message.bandwidth = 0;
        }
        if (object.onlinesecs !== undefined &&
            object.onlinesecs !== null) {
            message.onlinesecs = Number(object.onlinesecs);
        }
        else {
            message.onlinesecs = 0;
        }
        if (object.idlesecs !== undefined && object.idlesecs !== null) {
            message.idlesecs = Number(object.idlesecs);
        }
        else {
            message.idlesecs = 0;
        }
        if (object.strongCertificate !== undefined &&
            object.strongCertificate !== null) {
            message.strongCertificate = Boolean(object.strongCertificate);
        }
        else {
            message.strongCertificate = false;
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = Boolean(object.opus);
        }
        else {
            message.opus = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserStats);
        message.certificates = [];
        message.celtVersions = [];
        if (object.session !== undefined && object.session !== null) {
            message.session = object.session;
        }
        else {
            message.session = 0;
        }
        if (object.statsOnly !== undefined && object.statsOnly !== null) {
            message.statsOnly = object.statsOnly;
        }
        else {
            message.statsOnly = false;
        }
        if (object.certificates !== undefined &&
            object.certificates !== null) {
            for (const e of object.certificates) {
                message.certificates.push(e);
            }
        }
        if (object.fromClient !== undefined &&
            object.fromClient !== null) {
            message.fromClient = exports.UserStats_Stats.fromPartial(object.fromClient);
        }
        else {
            message.fromClient = undefined;
        }
        if (object.fromServer !== undefined &&
            object.fromServer !== null) {
            message.fromServer = exports.UserStats_Stats.fromPartial(object.fromServer);
        }
        else {
            message.fromServer = undefined;
        }
        if (object.udpPackets !== undefined &&
            object.udpPackets !== null) {
            message.udpPackets = object.udpPackets;
        }
        else {
            message.udpPackets = 0;
        }
        if (object.tcpPackets !== undefined &&
            object.tcpPackets !== null) {
            message.tcpPackets = object.tcpPackets;
        }
        else {
            message.tcpPackets = 0;
        }
        if (object.udpPingAvg !== undefined &&
            object.udpPingAvg !== null) {
            message.udpPingAvg = object.udpPingAvg;
        }
        else {
            message.udpPingAvg = 0;
        }
        if (object.udpPingVar !== undefined &&
            object.udpPingVar !== null) {
            message.udpPingVar = object.udpPingVar;
        }
        else {
            message.udpPingVar = 0;
        }
        if (object.tcpPingAvg !== undefined &&
            object.tcpPingAvg !== null) {
            message.tcpPingAvg = object.tcpPingAvg;
        }
        else {
            message.tcpPingAvg = 0;
        }
        if (object.tcpPingVar !== undefined &&
            object.tcpPingVar !== null) {
            message.tcpPingVar = object.tcpPingVar;
        }
        else {
            message.tcpPingVar = 0;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.Version.fromPartial(object.version);
        }
        else {
            message.version = undefined;
        }
        if (object.celtVersions !== undefined &&
            object.celtVersions !== null) {
            for (const e of object.celtVersions) {
                message.celtVersions.push(e);
            }
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = new Uint8Array();
        }
        if (object.bandwidth !== undefined && object.bandwidth !== null) {
            message.bandwidth = object.bandwidth;
        }
        else {
            message.bandwidth = 0;
        }
        if (object.onlinesecs !== undefined &&
            object.onlinesecs !== null) {
            message.onlinesecs = object.onlinesecs;
        }
        else {
            message.onlinesecs = 0;
        }
        if (object.idlesecs !== undefined && object.idlesecs !== null) {
            message.idlesecs = object.idlesecs;
        }
        else {
            message.idlesecs = 0;
        }
        if (object.strongCertificate !== undefined &&
            object.strongCertificate !== null) {
            message.strongCertificate = object.strongCertificate;
        }
        else {
            message.strongCertificate = false;
        }
        if (object.opus !== undefined && object.opus !== null) {
            message.opus = object.opus;
        }
        else {
            message.opus = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        message.statsOnly !== undefined &&
            (obj.statsOnly = message.statsOnly);
        if (message.certificates) {
            obj.certificates = message.certificates.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.certificates = [];
        }
        message.fromClient !== undefined &&
            (obj.fromClient = message.fromClient
                ? exports.UserStats_Stats.toJSON(message.fromClient)
                : undefined);
        message.fromServer !== undefined &&
            (obj.fromServer = message.fromServer
                ? exports.UserStats_Stats.toJSON(message.fromServer)
                : undefined);
        message.udpPackets !== undefined &&
            (obj.udpPackets = message.udpPackets);
        message.tcpPackets !== undefined &&
            (obj.tcpPackets = message.tcpPackets);
        message.udpPingAvg !== undefined &&
            (obj.udpPingAvg = message.udpPingAvg);
        message.udpPingVar !== undefined &&
            (obj.udpPingVar = message.udpPingVar);
        message.tcpPingAvg !== undefined &&
            (obj.tcpPingAvg = message.tcpPingAvg);
        message.tcpPingVar !== undefined &&
            (obj.tcpPingVar = message.tcpPingVar);
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.Version.toJSON(message.version)
                : undefined);
        if (message.celtVersions) {
            obj.celtVersions = message.celtVersions.map((e) => e);
        }
        else {
            obj.celtVersions = [];
        }
        message.address !== undefined &&
            (obj.address = base64FromBytes(message.address !== undefined
                ? message.address
                : new Uint8Array()));
        message.bandwidth !== undefined &&
            (obj.bandwidth = message.bandwidth);
        message.onlinesecs !== undefined &&
            (obj.onlinesecs = message.onlinesecs);
        message.idlesecs !== undefined &&
            (obj.idlesecs = message.idlesecs);
        message.strongCertificate !== undefined &&
            (obj.strongCertificate = message.strongCertificate);
        message.opus !== undefined && (obj.opus = message.opus);
        return obj;
    },
};
exports.UserStats_Stats = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.good);
        writer.uint32(16).uint32(message.late);
        writer.uint32(24).uint32(message.lost);
        writer.uint32(32).uint32(message.resync);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseUserStats_Stats);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.good = reader.uint32();
                    break;
                case 2:
                    message.late = reader.uint32();
                    break;
                case 3:
                    message.lost = reader.uint32();
                    break;
                case 4:
                    message.resync = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseUserStats_Stats);
        if (object.good !== undefined && object.good !== null) {
            message.good = Number(object.good);
        }
        else {
            message.good = 0;
        }
        if (object.late !== undefined && object.late !== null) {
            message.late = Number(object.late);
        }
        else {
            message.late = 0;
        }
        if (object.lost !== undefined && object.lost !== null) {
            message.lost = Number(object.lost);
        }
        else {
            message.lost = 0;
        }
        if (object.resync !== undefined && object.resync !== null) {
            message.resync = Number(object.resync);
        }
        else {
            message.resync = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseUserStats_Stats);
        if (object.good !== undefined && object.good !== null) {
            message.good = object.good;
        }
        else {
            message.good = 0;
        }
        if (object.late !== undefined && object.late !== null) {
            message.late = object.late;
        }
        else {
            message.late = 0;
        }
        if (object.lost !== undefined && object.lost !== null) {
            message.lost = object.lost;
        }
        else {
            message.lost = 0;
        }
        if (object.resync !== undefined && object.resync !== null) {
            message.resync = object.resync;
        }
        else {
            message.resync = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.good !== undefined && (obj.good = message.good);
        message.late !== undefined && (obj.late = message.late);
        message.lost !== undefined && (obj.lost = message.lost);
        message.resync !== undefined && (obj.resync = message.resync);
        return obj;
    },
};
exports.RequestBlob = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sessionTexture) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.sessionComment) {
            writer.uint32(v);
        }
        writer.ldelim();
        writer.uint32(26).fork();
        for (const v of message.channelDescription) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRequestBlob);
        message.sessionTexture = [];
        message.sessionComment = [];
        message.channelDescription = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sessionTexture.push(reader.uint32());
                        }
                    }
                    else {
                        message.sessionTexture.push(reader.uint32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sessionComment.push(reader.uint32());
                        }
                    }
                    else {
                        message.sessionComment.push(reader.uint32());
                    }
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.channelDescription.push(reader.uint32());
                        }
                    }
                    else {
                        message.channelDescription.push(reader.uint32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRequestBlob);
        message.sessionTexture = [];
        message.sessionComment = [];
        message.channelDescription = [];
        if (object.sessionTexture !== undefined &&
            object.sessionTexture !== null) {
            for (const e of object.sessionTexture) {
                message.sessionTexture.push(Number(e));
            }
        }
        if (object.sessionComment !== undefined &&
            object.sessionComment !== null) {
            for (const e of object.sessionComment) {
                message.sessionComment.push(Number(e));
            }
        }
        if (object.channelDescription !== undefined &&
            object.channelDescription !== null) {
            for (const e of object.channelDescription) {
                message.channelDescription.push(Number(e));
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseRequestBlob);
        message.sessionTexture = [];
        message.sessionComment = [];
        message.channelDescription = [];
        if (object.sessionTexture !== undefined &&
            object.sessionTexture !== null) {
            for (const e of object.sessionTexture) {
                message.sessionTexture.push(e);
            }
        }
        if (object.sessionComment !== undefined &&
            object.sessionComment !== null) {
            for (const e of object.sessionComment) {
                message.sessionComment.push(e);
            }
        }
        if (object.channelDescription !== undefined &&
            object.channelDescription !== null) {
            for (const e of object.channelDescription) {
                message.channelDescription.push(e);
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionTexture) {
            obj.sessionTexture = message.sessionTexture.map((e) => e);
        }
        else {
            obj.sessionTexture = [];
        }
        if (message.sessionComment) {
            obj.sessionComment = message.sessionComment.map((e) => e);
        }
        else {
            obj.sessionComment = [];
        }
        if (message.channelDescription) {
            obj.channelDescription = message.channelDescription.map((e) => e);
        }
        else {
            obj.channelDescription = [];
        }
        return obj;
    },
};
exports.ServerConfig = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.maxBandwidth);
        writer.uint32(18).string(message.welcomeText);
        writer.uint32(24).bool(message.allowHtml);
        writer.uint32(32).uint32(message.messageLength);
        writer.uint32(40).uint32(message.imageMessageLength);
        writer.uint32(48).uint32(message.maxUsers);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseServerConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBandwidth = reader.uint32();
                    break;
                case 2:
                    message.welcomeText = reader.string();
                    break;
                case 3:
                    message.allowHtml = reader.bool();
                    break;
                case 4:
                    message.messageLength = reader.uint32();
                    break;
                case 5:
                    message.imageMessageLength = reader.uint32();
                    break;
                case 6:
                    message.maxUsers = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseServerConfig);
        if (object.maxBandwidth !== undefined &&
            object.maxBandwidth !== null) {
            message.maxBandwidth = Number(object.maxBandwidth);
        }
        else {
            message.maxBandwidth = 0;
        }
        if (object.welcomeText !== undefined &&
            object.welcomeText !== null) {
            message.welcomeText = String(object.welcomeText);
        }
        else {
            message.welcomeText = '';
        }
        if (object.allowHtml !== undefined && object.allowHtml !== null) {
            message.allowHtml = Boolean(object.allowHtml);
        }
        else {
            message.allowHtml = false;
        }
        if (object.messageLength !== undefined &&
            object.messageLength !== null) {
            message.messageLength = Number(object.messageLength);
        }
        else {
            message.messageLength = 0;
        }
        if (object.imageMessageLength !== undefined &&
            object.imageMessageLength !== null) {
            message.imageMessageLength = Number(object.imageMessageLength);
        }
        else {
            message.imageMessageLength = 0;
        }
        if (object.maxUsers !== undefined && object.maxUsers !== null) {
            message.maxUsers = Number(object.maxUsers);
        }
        else {
            message.maxUsers = 0;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseServerConfig);
        if (object.maxBandwidth !== undefined &&
            object.maxBandwidth !== null) {
            message.maxBandwidth = object.maxBandwidth;
        }
        else {
            message.maxBandwidth = 0;
        }
        if (object.welcomeText !== undefined &&
            object.welcomeText !== null) {
            message.welcomeText = object.welcomeText;
        }
        else {
            message.welcomeText = '';
        }
        if (object.allowHtml !== undefined && object.allowHtml !== null) {
            message.allowHtml = object.allowHtml;
        }
        else {
            message.allowHtml = false;
        }
        if (object.messageLength !== undefined &&
            object.messageLength !== null) {
            message.messageLength = object.messageLength;
        }
        else {
            message.messageLength = 0;
        }
        if (object.imageMessageLength !== undefined &&
            object.imageMessageLength !== null) {
            message.imageMessageLength = object.imageMessageLength;
        }
        else {
            message.imageMessageLength = 0;
        }
        if (object.maxUsers !== undefined && object.maxUsers !== null) {
            message.maxUsers = object.maxUsers;
        }
        else {
            message.maxUsers = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxBandwidth !== undefined &&
            (obj.maxBandwidth = message.maxBandwidth);
        message.welcomeText !== undefined &&
            (obj.welcomeText = message.welcomeText);
        message.allowHtml !== undefined &&
            (obj.allowHtml = message.allowHtml);
        message.messageLength !== undefined &&
            (obj.messageLength = message.messageLength);
        message.imageMessageLength !== undefined &&
            (obj.imageMessageLength = message.imageMessageLength);
        message.maxUsers !== undefined &&
            (obj.maxUsers = message.maxUsers);
        return obj;
    },
};
exports.SuggestConfig = {
    encode(message, writer = protobufjs_1.Writer.create()) {
        writer.uint32(8).uint32(message.version);
        writer.uint32(16).bool(message.positional);
        writer.uint32(24).bool(message.pushToTalk);
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new protobufjs_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSuggestConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.uint32();
                    break;
                case 2:
                    message.positional = reader.bool();
                    break;
                case 3:
                    message.pushToTalk = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSuggestConfig);
        if (object.version !== undefined && object.version !== null) {
            message.version = Number(object.version);
        }
        else {
            message.version = 0;
        }
        if (object.positional !== undefined &&
            object.positional !== null) {
            message.positional = Boolean(object.positional);
        }
        else {
            message.positional = false;
        }
        if (object.pushToTalk !== undefined &&
            object.pushToTalk !== null) {
            message.pushToTalk = Boolean(object.pushToTalk);
        }
        else {
            message.pushToTalk = false;
        }
        return message;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseSuggestConfig);
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = 0;
        }
        if (object.positional !== undefined &&
            object.positional !== null) {
            message.positional = object.positional;
        }
        else {
            message.positional = false;
        }
        if (object.pushToTalk !== undefined &&
            object.pushToTalk !== null) {
            message.pushToTalk = object.pushToTalk;
        }
        else {
            message.pushToTalk = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.positional !== undefined &&
            (obj.positional = message.positional);
        message.pushToTalk !== undefined &&
            (obj.pushToTalk = message.pushToTalk);
        return obj;
    },
};
const windowBase64 = globalThis;
const atob = windowBase64.atob ||
    ((b64) => Buffer.from(b64, 'base64').toString('binary'));
const btoa = windowBase64.btoa ||
    ((bin) => Buffer.from(bin, 'binary').toString('base64'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(''));
}
//# sourceMappingURL=Mumble.js.map