import { Writer, Reader } from 'protobufjs';
export interface Version {
    version: number;
    release: string;
    os: string;
    osVersion: string;
}
export interface UDPTunnel {
    packet: Uint8Array;
}
export interface Authenticate {
    username: string;
    password: string;
    tokens: string[];
    celtVersions: number[];
    opus: boolean;
}
export interface Ping {
    timestamp: number;
    good: number;
    late: number;
    lost: number;
    resync: number;
    udpPackets: number;
    tcpPackets: number;
    udpPingAvg: number;
    udpPingVar: number;
    tcpPingAvg: number;
    tcpPingVar: number;
}
export interface Reject {
    type: Reject_RejectType;
    reason: string;
}
export interface ServerSync {
    session: number;
    maxBandwidth: number;
    welcomeText: string;
    permissions: number;
}
export interface ChannelRemove {
    channelId: number;
}
export interface ChannelState {
    channelId: number;
    parent: number;
    name: string;
    links: number[];
    description: string;
    linksAdd: number[];
    linksRemove: number[];
    temporary: boolean;
    position: number;
    descriptionHash: Uint8Array;
    maxUsers: number;
    isEnterRestricted: boolean;
    canEnter: boolean;
}
export interface UserRemove {
    session: number;
    actor: number;
    reason: string;
    ban: boolean;
}
export interface UserState {
    session: number;
    actor: number;
    name: string;
    userId: number;
    channelId: number;
    mute: boolean;
    deaf: boolean;
    suppress: boolean;
    selfMute: boolean;
    selfDeaf: boolean;
    texture: Uint8Array;
    pluginContext: Uint8Array;
    pluginIdentity: string;
    comment: string;
    hash: string;
    commentHash: Uint8Array;
    textureHash: Uint8Array;
    prioritySpeaker: boolean;
    recording: boolean;
    temporaryAccessTokens: string[];
    listeningChannelAdd: number[];
    listeningChannelRemove: number[];
}
export interface BanList {
    bans: BanList_BanEntry[];
    query: boolean;
}
export interface BanList_BanEntry {
    address: Uint8Array;
    mask: number;
    name: string;
    hash: string;
    reason: string;
    start: string;
    duration: number;
}
export interface TextMessage {
    actor: number;
    session: number[];
    channelId: number[];
    treeId: number[];
    message: string;
}
export interface PermissionDenied {
    permission: number;
    channelId: number;
    session: number;
    reason: string;
    type: PermissionDenied_DenyType;
    name: string;
}
export interface ACL {
    channelId: number;
    inheritAcls: boolean;
    groups: ACL_ChanGroup[];
    acls: ACL_ChanACL[];
    query: boolean;
}
export interface ACL_ChanGroup {
    name: string;
    inherited: boolean;
    inherit: boolean;
    inheritable: boolean;
    add: number[];
    remove: number[];
    inheritedMembers: number[];
}
export interface ACL_ChanACL {
    applyHere: boolean;
    applySubs: boolean;
    inherited: boolean;
    userId: number;
    group: string;
    grant: number;
    deny: number;
}
export interface QueryUsers {
    ids: number[];
    names: string[];
}
export interface CryptSetup {
    key: Uint8Array;
    clientNonce: Uint8Array;
    serverNonce: Uint8Array;
}
export interface ContextActionModify {
    action: string;
    text: string;
    context: number;
    operation: ContextActionModify_Operation;
}
export interface ContextAction {
    session: number;
    channelId: number;
    action: string;
}
export interface UserList {
    users: UserList_User[];
}
export interface UserList_User {
    userId: number;
    name: string;
    lastSeen: string;
    lastChannel: number;
}
export interface VoiceTarget {
    id: number;
    targets: VoiceTarget_Target[];
}
export interface VoiceTarget_Target {
    session: number[];
    channelId: number;
    group: string;
    links: boolean;
    children: boolean;
}
export interface PermissionQuery {
    channelId: number;
    permissions: number;
    flush: boolean;
}
export interface CodecVersion {
    alpha: number;
    beta: number;
    preferAlpha: boolean;
    opus: boolean;
}
export interface UserStats {
    session: number;
    statsOnly: boolean;
    certificates: Uint8Array[];
    fromClient: UserStats_Stats | undefined;
    fromServer: UserStats_Stats | undefined;
    udpPackets: number;
    tcpPackets: number;
    udpPingAvg: number;
    udpPingVar: number;
    tcpPingAvg: number;
    tcpPingVar: number;
    version: Version | undefined;
    celtVersions: number[];
    address: Uint8Array;
    bandwidth: number;
    onlinesecs: number;
    idlesecs: number;
    strongCertificate: boolean;
    opus: boolean;
}
export interface UserStats_Stats {
    good: number;
    late: number;
    lost: number;
    resync: number;
}
export interface RequestBlob {
    sessionTexture: number[];
    sessionComment: number[];
    channelDescription: number[];
}
export interface ServerConfig {
    maxBandwidth: number;
    welcomeText: string;
    allowHtml: boolean;
    messageLength: number;
    imageMessageLength: number;
    maxUsers: number;
}
export interface SuggestConfig {
    version: number;
    positional: boolean;
    pushToTalk: boolean;
}
export declare const protobufPackage = "MumbleProto";
export declare enum Reject_RejectType {
    None = 0,
    WrongVersion = 1,
    InvalidUsername = 2,
    WrongUserPW = 3,
    WrongServerPW = 4,
    UsernameInUse = 5,
    ServerFull = 6,
    NoCertificate = 7,
    AuthenticatorFail = 8,
    UNRECOGNIZED = -1
}
export declare function reject_RejectTypeFromJSON(object: any): Reject_RejectType;
export declare function reject_RejectTypeToJSON(object: Reject_RejectType): string;
export declare enum PermissionDenied_DenyType {
    Text = 0,
    Permission = 1,
    SuperUser = 2,
    ChannelName = 3,
    TextTooLong = 4,
    H9K = 5,
    TemporaryChannel = 6,
    MissingCertificate = 7,
    UserName = 8,
    ChannelFull = 9,
    NestingLimit = 10,
    ChannelCountLimit = 11,
    ChannelListenerLimit = 12,
    UserListenerLimit = 13,
    UNRECOGNIZED = -1
}
export declare function permissionDenied_DenyTypeFromJSON(object: any): PermissionDenied_DenyType;
export declare function permissionDenied_DenyTypeToJSON(object: PermissionDenied_DenyType): string;
export declare enum ContextActionModify_Context {
    Server = 1,
    Channel = 2,
    User = 4,
    UNRECOGNIZED = -1
}
export declare function contextActionModify_ContextFromJSON(object: any): ContextActionModify_Context;
export declare function contextActionModify_ContextToJSON(object: ContextActionModify_Context): string;
export declare enum ContextActionModify_Operation {
    Add = 0,
    Remove = 1,
    UNRECOGNIZED = -1
}
export declare function contextActionModify_OperationFromJSON(object: any): ContextActionModify_Operation;
export declare function contextActionModify_OperationToJSON(object: ContextActionModify_Operation): string;
export declare const Version: {
    encode(message: Version, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    fromPartial(object: DeepPartial<Version>): Version;
    toJSON(message: Version): unknown;
};
export declare const UDPTunnel: {
    encode(message: UDPTunnel, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UDPTunnel;
    fromJSON(object: any): UDPTunnel;
    fromPartial(object: DeepPartial<UDPTunnel>): UDPTunnel;
    toJSON(message: UDPTunnel): unknown;
};
export declare const Authenticate: {
    encode(message: Authenticate, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): Authenticate;
    fromJSON(object: any): Authenticate;
    fromPartial(object: DeepPartial<Authenticate>): Authenticate;
    toJSON(message: Authenticate): unknown;
};
export declare const Ping: {
    encode(message: Ping, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): Ping;
    fromJSON(object: any): Ping;
    fromPartial(object: DeepPartial<Ping>): Ping;
    toJSON(message: Ping): unknown;
};
export declare const Reject: {
    encode(message: Reject, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): Reject;
    fromJSON(object: any): Reject;
    fromPartial(object: DeepPartial<Reject>): Reject;
    toJSON(message: Reject): unknown;
};
export declare const ServerSync: {
    encode(message: ServerSync, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ServerSync;
    fromJSON(object: any): ServerSync;
    fromPartial(object: DeepPartial<ServerSync>): ServerSync;
    toJSON(message: ServerSync): unknown;
};
export declare const ChannelRemove: {
    encode(message: ChannelRemove, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ChannelRemove;
    fromJSON(object: any): ChannelRemove;
    fromPartial(object: DeepPartial<ChannelRemove>): ChannelRemove;
    toJSON(message: ChannelRemove): unknown;
};
export declare const ChannelState: {
    encode(message: ChannelState, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ChannelState;
    fromJSON(object: any): ChannelState;
    fromPartial(object: DeepPartial<ChannelState>): ChannelState;
    toJSON(message: ChannelState): unknown;
};
export declare const UserRemove: {
    encode(message: UserRemove, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserRemove;
    fromJSON(object: any): UserRemove;
    fromPartial(object: DeepPartial<UserRemove>): UserRemove;
    toJSON(message: UserRemove): unknown;
};
export declare const UserState: {
    encode(message: UserState, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserState;
    fromJSON(object: any): UserState;
    fromPartial(object: DeepPartial<UserState>): UserState;
    toJSON(message: UserState): unknown;
};
export declare const BanList: {
    encode(message: BanList, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): BanList;
    fromJSON(object: any): BanList;
    fromPartial(object: DeepPartial<BanList>): BanList;
    toJSON(message: BanList): unknown;
};
export declare const BanList_BanEntry: {
    encode(message: BanList_BanEntry, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): BanList_BanEntry;
    fromJSON(object: any): BanList_BanEntry;
    fromPartial(object: DeepPartial<BanList_BanEntry>): BanList_BanEntry;
    toJSON(message: BanList_BanEntry): unknown;
};
export declare const TextMessage: {
    encode(message: TextMessage, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): TextMessage;
    fromJSON(object: any): TextMessage;
    fromPartial(object: DeepPartial<TextMessage>): TextMessage;
    toJSON(message: TextMessage): unknown;
};
export declare const PermissionDenied: {
    encode(message: PermissionDenied, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PermissionDenied;
    fromJSON(object: any): PermissionDenied;
    fromPartial(object: DeepPartial<PermissionDenied>): PermissionDenied;
    toJSON(message: PermissionDenied): unknown;
};
export declare const ACL: {
    encode(message: ACL, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ACL;
    fromJSON(object: any): ACL;
    fromPartial(object: DeepPartial<ACL>): ACL;
    toJSON(message: ACL): unknown;
};
export declare const ACL_ChanGroup: {
    encode(message: ACL_ChanGroup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ACL_ChanGroup;
    fromJSON(object: any): ACL_ChanGroup;
    fromPartial(object: DeepPartial<ACL_ChanGroup>): ACL_ChanGroup;
    toJSON(message: ACL_ChanGroup): unknown;
};
export declare const ACL_ChanACL: {
    encode(message: ACL_ChanACL, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ACL_ChanACL;
    fromJSON(object: any): ACL_ChanACL;
    fromPartial(object: DeepPartial<ACL_ChanACL>): ACL_ChanACL;
    toJSON(message: ACL_ChanACL): unknown;
};
export declare const QueryUsers: {
    encode(message: QueryUsers, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): QueryUsers;
    fromJSON(object: any): QueryUsers;
    fromPartial(object: DeepPartial<QueryUsers>): QueryUsers;
    toJSON(message: QueryUsers): unknown;
};
export declare const CryptSetup: {
    encode(message: CryptSetup, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CryptSetup;
    fromJSON(object: any): CryptSetup;
    fromPartial(object: DeepPartial<CryptSetup>): CryptSetup;
    toJSON(message: CryptSetup): unknown;
};
export declare const ContextActionModify: {
    encode(message: ContextActionModify, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ContextActionModify;
    fromJSON(object: any): ContextActionModify;
    fromPartial(object: DeepPartial<ContextActionModify>): ContextActionModify;
    toJSON(message: ContextActionModify): unknown;
};
export declare const ContextAction: {
    encode(message: ContextAction, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ContextAction;
    fromJSON(object: any): ContextAction;
    fromPartial(object: DeepPartial<ContextAction>): ContextAction;
    toJSON(message: ContextAction): unknown;
};
export declare const UserList: {
    encode(message: UserList, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserList;
    fromJSON(object: any): UserList;
    fromPartial(object: DeepPartial<UserList>): UserList;
    toJSON(message: UserList): unknown;
};
export declare const UserList_User: {
    encode(message: UserList_User, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserList_User;
    fromJSON(object: any): UserList_User;
    fromPartial(object: DeepPartial<UserList_User>): UserList_User;
    toJSON(message: UserList_User): unknown;
};
export declare const VoiceTarget: {
    encode(message: VoiceTarget, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): VoiceTarget;
    fromJSON(object: any): VoiceTarget;
    fromPartial(object: DeepPartial<VoiceTarget>): VoiceTarget;
    toJSON(message: VoiceTarget): unknown;
};
export declare const VoiceTarget_Target: {
    encode(message: VoiceTarget_Target, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): VoiceTarget_Target;
    fromJSON(object: any): VoiceTarget_Target;
    fromPartial(object: DeepPartial<VoiceTarget_Target>): VoiceTarget_Target;
    toJSON(message: VoiceTarget_Target): unknown;
};
export declare const PermissionQuery: {
    encode(message: PermissionQuery, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): PermissionQuery;
    fromJSON(object: any): PermissionQuery;
    fromPartial(object: DeepPartial<PermissionQuery>): PermissionQuery;
    toJSON(message: PermissionQuery): unknown;
};
export declare const CodecVersion: {
    encode(message: CodecVersion, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): CodecVersion;
    fromJSON(object: any): CodecVersion;
    fromPartial(object: DeepPartial<CodecVersion>): CodecVersion;
    toJSON(message: CodecVersion): unknown;
};
export declare const UserStats: {
    encode(message: UserStats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserStats;
    fromJSON(object: any): UserStats;
    fromPartial(object: DeepPartial<UserStats>): UserStats;
    toJSON(message: UserStats): unknown;
};
export declare const UserStats_Stats: {
    encode(message: UserStats_Stats, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): UserStats_Stats;
    fromJSON(object: any): UserStats_Stats;
    fromPartial(object: DeepPartial<UserStats_Stats>): UserStats_Stats;
    toJSON(message: UserStats_Stats): unknown;
};
export declare const RequestBlob: {
    encode(message: RequestBlob, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): RequestBlob;
    fromJSON(object: any): RequestBlob;
    fromPartial(object: DeepPartial<RequestBlob>): RequestBlob;
    toJSON(message: RequestBlob): unknown;
};
export declare const ServerConfig: {
    encode(message: ServerConfig, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): ServerConfig;
    fromJSON(object: any): ServerConfig;
    fromPartial(object: DeepPartial<ServerConfig>): ServerConfig;
    toJSON(message: ServerConfig): unknown;
};
export declare const SuggestConfig: {
    encode(message: SuggestConfig, writer?: Writer): Writer;
    decode(input: Uint8Array | Reader, length?: number | undefined): SuggestConfig;
    fromJSON(object: any): SuggestConfig;
    fromPartial(object: DeepPartial<SuggestConfig>): SuggestConfig;
    toJSON(message: SuggestConfig): unknown;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
