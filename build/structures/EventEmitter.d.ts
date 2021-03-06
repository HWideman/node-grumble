declare type EventMap = Record<string, any>;
declare type EventKey<T extends EventMap> = string & keyof T;
declare type EventReceiver<T> = (params: T) => void;
interface Emitter<T extends EventMap> {
    on<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    off<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    emit<K extends EventKey<T>>(eventName: K, params: T[K]): void;
}
export declare class TypedEventEmitter<T extends EventMap> implements Emitter<T> {
    private emitter;
    constructor();
    on<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    off<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    emit<K extends EventKey<T>>(eventName: K, params: T[K]): void;
}
export {};
