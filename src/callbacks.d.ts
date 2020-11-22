declare interface sayCallback {
    (player: ServerScript.ScriptRoomPlayer, text: string, chatType: number): boolean
}

declare interface onSayCallbackFunction {
    (player: ServerScript.ScriptUnit, text: string): boolean
}

declare interface httpCallbackFunction {
    (response: string): any
}

/** @tupleReturn */
declare interface damageCallbackFunction {
    (attaker: ServerScript.ScriptUnit, defender: ServerScript.ScriptUnit,
        skillDataID: number, critical: boolean, visible: boolean): [number, boolean, boolean];
}

declare interface onAddItemFunction {
    (unit: ServerScript.ScriptUnit, item: network.TItem): void
}

declare interface onGetTopicFunction {
    (): void
}
