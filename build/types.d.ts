import * as MumbleProto from './proto/Mumble';
export declare type UnwrapPromise<T> = T extends PromiseLike<infer U> ? U : T;
export declare enum Codec {
    Celt = 0,
    Ping = 1,
    Speex = 2,
    CeltBeta = 3,
    Opus = 4
}
export declare enum Events {
    Connected = "connected",
    Error = "error",
    Close = "close",
    Packet = "packet"
}
export interface EventMap {
    [Events.Connected]: undefined;
    [Events.Close]: undefined;
    [Events.Error]: Error;
    [Events.Packet]: Packet;
}
export interface NodeGrumbleOptions {
    url: string;
    port?: number;
    rejectUnauthorized?: boolean;
    name?: string;
    password?: string;
    tokens?: any[];
}
export interface CompleteGrumbleOptions {
    url: string;
    port: number;
    rejectUnauthorized: boolean;
    name: string;
    password: string;
    tokens: any[];
}
declare type MessagePacket<T, M> = {
    type: T;
    message: M;
};
export interface MessageEventMap {
    [MessageType.Version]: MumbleProto.Version;
    [MessageType.UDPTunnel]: MumbleProto.UDPTunnel;
    [MessageType.Authenticate]: MumbleProto.Authenticate;
    [MessageType.Ping]: MumbleProto.Ping;
    [MessageType.Reject]: MumbleProto.Reject;
    [MessageType.ServerSync]: MumbleProto.ServerSync;
    [MessageType.ChannelRemove]: MumbleProto.ChannelRemove;
    [MessageType.ChannelState]: MumbleProto.ChannelState;
    [MessageType.UserRemove]: MumbleProto.UserRemove;
    [MessageType.UserState]: MumbleProto.UserState;
    [MessageType.BanList]: MumbleProto.BanList;
    [MessageType.TextMessage]: MumbleProto.TextMessage;
    [MessageType.PermissionDenied]: MumbleProto.PermissionDenied;
    [MessageType.ACL]: MumbleProto.ACL;
    [MessageType.QueryUsers]: MumbleProto.QueryUsers;
    [MessageType.CryptSetup]: MumbleProto.CryptSetup;
    [MessageType.ContextActionModify]: MumbleProto.ContextActionModify;
    [MessageType.ContextAction]: MumbleProto.ContextAction;
    [MessageType.UserList]: MumbleProto.UserList;
    [MessageType.VoiceTarget]: MumbleProto.VoiceTarget;
    [MessageType.PermissionQuery]: MumbleProto.PermissionQuery;
    [MessageType.CodecVersion]: MumbleProto.CodecVersion;
    [MessageType.UserStats]: MumbleProto.UserStats;
    [MessageType.RequestBlob]: MumbleProto.RequestBlob;
    [MessageType.ServerConfig]: MumbleProto.ServerConfig;
    [MessageType.SuggestConfig]: MumbleProto.SuggestConfig;
}
export declare enum MessageType {
    Version = "Version",
    UDPTunnel = "UDPTunnel",
    Authenticate = "Authenticate",
    Ping = "Ping",
    Reject = "Reject",
    ServerSync = "ServerSync",
    ChannelRemove = "ChannelRemove",
    ChannelState = "ChannelState",
    UserRemove = "UserRemove",
    UserState = "UserState",
    BanList = "BanList",
    TextMessage = "TextMessage",
    PermissionDenied = "PermissionDenied",
    ACL = "ACL",
    QueryUsers = "QueryUsers",
    CryptSetup = "CryptSetup",
    ContextActionModify = "ContextActionModify",
    ContextAction = "ContextAction",
    UserList = "UserList",
    VoiceTarget = "VoiceTarget",
    PermissionQuery = "PermissionQuery",
    CodecVersion = "CodecVersion",
    UserStats = "UserStats",
    RequestBlob = "RequestBlob",
    ServerConfig = "ServerConfig",
    SuggestConfig = "SuggestConfig"
}
export declare enum Messages {
    Version = 0,
    UDPTunnel = 1,
    Authenticate = 2,
    Ping = 3,
    Reject = 4,
    ServerSync = 5,
    ChannelRemove = 6,
    ChannelState = 7,
    UserRemove = 8,
    UserState = 9,
    BanList = 10,
    TextMessage = 11,
    PermissionDenied = 12,
    ACL = 13,
    QueryUsers = 14,
    CryptSetup = 15,
    ContextActionModify = 16,
    ContextAction = 17,
    UserList = 18,
    VoiceTarget = 19,
    PermissionQuery = 20,
    CodecVersion = 21,
    UserStats = 22,
    RequestBlob = 23,
    ServerConfig = 24,
    SuggestConfig = 25
}
export declare type Packet = MessagePacket<MessageType.Version, MumbleProto.Version> | MessagePacket<MessageType.UDPTunnel, MumbleProto.UDPTunnel> | MessagePacket<MessageType.Authenticate, MumbleProto.Authenticate> | MessagePacket<MessageType.Ping, MumbleProto.Ping> | MessagePacket<MessageType.Reject, MumbleProto.Reject> | MessagePacket<MessageType.ServerSync, MumbleProto.ServerSync> | MessagePacket<MessageType.ChannelRemove, MumbleProto.ChannelRemove> | MessagePacket<MessageType.ChannelState, MumbleProto.ChannelState> | MessagePacket<MessageType.UserRemove, MumbleProto.UserRemove> | MessagePacket<MessageType.UserState, MumbleProto.UserState> | MessagePacket<MessageType.BanList, MumbleProto.BanList> | MessagePacket<MessageType.TextMessage, MumbleProto.TextMessage> | MessagePacket<MessageType.PermissionDenied, MumbleProto.PermissionDenied> | MessagePacket<MessageType.ACL, MumbleProto.ACL> | MessagePacket<MessageType.QueryUsers, MumbleProto.QueryUsers> | MessagePacket<MessageType.CryptSetup, MumbleProto.CryptSetup> | MessagePacket<MessageType.ContextActionModify, MumbleProto.ContextActionModify> | MessagePacket<MessageType.ContextAction, MumbleProto.ContextAction> | MessagePacket<MessageType.UserList, MumbleProto.UserList> | MessagePacket<MessageType.VoiceTarget, MumbleProto.VoiceTarget> | MessagePacket<MessageType.PermissionQuery, MumbleProto.PermissionQuery> | MessagePacket<MessageType.CodecVersion, MumbleProto.CodecVersion> | MessagePacket<MessageType.UserStats, MumbleProto.UserStats> | MessagePacket<MessageType.RequestBlob, MumbleProto.RequestBlob> | MessagePacket<MessageType.ServerConfig, MumbleProto.ServerConfig> | MessagePacket<MessageType.SuggestConfig, MumbleProto.SuggestConfig>;
export {};
