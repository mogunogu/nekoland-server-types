



declare interface SayCallback {
    /**
    플레이어가 말했을 때의 콜백 함수입니다
    콜백 함수의 형식: function(ScriptRoomPlayer player, string text) => bool
    반환값: 플레이어가 말한 내용이 적용 되는지 (True: 대사 적용, False: 대사 무시)

    [1] player: 말한 플레이어
    [2] text: 플레이어가 말한 대사
    */
    (player: ServerScript.ScriptRoomPlayer, text: string, chatType: number): boolean
}


/** @tupleReturn */
declare interface DamageCallback {
    /**
    유닛의 데미지 계산 공식 콜백 함수입니다 (데미지 공식을 커스텀 할 수 있습니다)
    콜백 함수의 형식: function(ScriptUnit from, ScriptUnit to, long damage, int skillDataID, bool critical, bool visible) => long
    반환값: 계산된 데미지, (+ 크리티컬 여부), (+ 피격 데미지 표시 여부)

    [1] from: 공격 유닛
    [2] to: 대상 유닛
    [3] damage: 공격의 데미지
    [4] skillDataID: 스킬의 데이터 ID
    [5] critical: 크리티컬 여부
    [6] visible: 피격 데미지 표시 여부
    */
    (attaker: ServerScript.ScriptUnit, defender: ServerScript.ScriptUnit,
        skillDataID: number, critical: boolean, visible: boolean): [number, boolean, boolean];
}


declare interface CreateClanCallback {
    /**
    * 클랜이 생성되었을 때의 콜백 함수입니다
    * 콜백 함수의 형식: function(ScriptRoomPlayer player, string name, int joinType) => bool
    * 반환값: 클랜 생성이 성공했는지 (True: 클랜 생성 성공, False: 클랜 생성 실패)

    * [1] player: 클랜을 만든 플레이어
    * [2] name: 클랜의 이름
    * [3] joinType: 클랜의 가입 형식
    * (클랜 가입 형식 [0: 즉시 가입], [1: 가입 요청], [2: 비공개])
    */
    (player: ServerScript.ScriptRoomPlayer, clanName: string, joinType: number): boolean
}

declare interface PlayerJoinPartyCallback {
    /**
    유닛이 파티에 참가할 때 호출되는 콜백 함수입니다
    콜백 함수의 형식: function(ScriptRoomPlayer player, ScriptParty party) => bool
    반환값: 유닛이 파티에 참가되었는가 (True: 참가, False: 참가하지 못함)

    [1] player: 참가할 유닛
    [2] party: 참가할 파티
    */
    (player: ServerScript.ScriptRoomPlayer, party: ServerScript.ScriptParty): boolean
}


declare interface PlayerLeavePartyCallback {
    /**
    유닛이 파티에서 나갈 때 호출되는 콜백 함수입니다
    콜백 함수의 형식: function(ScriptRoomPlayer player, ScriptParty party)
    반환값: 없음

    [1] player: 파티에서 나갈 유닛
    [2] party: 나갈 파티
    */
    (player: ServerScript.ScriptRoomPlayer, party: ServerScript.ScriptParty): boolean
}



declare interface RewardCallback {
    /**
    몬스터가 죽었을 때의 커스텀 보상 콜백 함수입니다
    콜백 함수의 형식: function(ScriptUnit unit, ScriptUnit monster, int damage)
    반환값: 없음

    [1] unit: 몬스터를 죽인 유닛
    [2] monster: 죽은 몬스터 유닛
    [3] damage: 입힌 데미지
    */
    (unit: ServerScript.ScriptUnit, monster: ServerScript.ScriptUnit, damage: number): boolean
}
