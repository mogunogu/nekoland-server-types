
/** @luaTable */
declare interface Table<K extends {} = {}, V = any> {
    readonly length: number;
    set(key: K, value: V | undefined): void;
    get(key: K): V | undefined;
}

