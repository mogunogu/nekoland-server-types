



declare interface SayCallback {
    (player: ServerScript.ScriptRoomPlayer, text: string, chatType: number): boolean
}


/** @tupleReturn */
declare interface DamageCallback {
    (attaker: ServerScript.ScriptUnit, defender: ServerScript.ScriptUnit,
        skillDataID: number, critical: boolean, visible: boolean): [number, boolean, boolean];
}



declare interface CreateClanCallback {
    (player: ServerScript.ScriptRoomPlayer, clanName: string, joinType: number): boolean
}