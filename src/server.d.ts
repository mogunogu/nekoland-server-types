/** @noSelfInFile **/
/// <reference path="./callbacks.d.ts" />
/// <reference path="./interfaces.d.ts" />
/// <reference path="./network.d.ts" />
/// <reference path="./types.d.ts" />



declare namespace ServerScript {
    
    /**
    * 스크립팅 오브젝트의 기본 클래스입니다.
    * 커스텀 데이터 수정이 가능합니다 (몬스터 AI 의 스크립팅 중 ai.customData.test = 1 와 같이 커스텀 변수의 사용이 가능합니다)
    */
    interface ScriptObject {
        /**
         * 커스텀 데이터
         */
        customData: Table;
    }

    /**
    * 하나의 클랜에 대응하는 클래스입니다
    */
    interface ScriptClan extends ScriptObject{
        /**
         * 클랜의 생성일
        */
        readonly createdAt: any;
         
        /**
         * 클랜의 고유 ID
         */
        readonly id: number

        /**
         * 클랜 마스터의 ID
         */
        readonly masterPlayerID: number

        /**
         * 배열 형식의 멤버 ID 목록
         */
        readonly memberIDs: number[]

        /**
         * 클랜의 고유 이름
         */
        readonly name: string

        /**
         * 
         * @param id 대상 멤버 ID
         * @returns 클랜 맴버의 이름
         */
        GetMemberName(id: number): string

        /**
         * 이 클랜에 대한 정보를 갱신합니다
         */
        Invalidate(): void
    }

    /**
    * 게임 서버를 스크립트로 조작할 수 있게 해주는 서버 클래스입니다.
    * @noSelf
    */
    interface ScriptServer {

        /**
         * 클랜이 생성되었을 때의 콜백 함수입니다
         */
        createClan: CreateClanCallback
        
        /**
         * 유닛의 데미지 계산 공식 콜백 함수입니다 (데미지 공식을 커스텀 할 수 있습니다)
         */
        damageCallback: DamageCallback

        /**
         * 현재 게임에 생성된 모든 맵(필드)를 가져옵니다
         */
        readonly fields: (ServerScript.ScriptField | null)[]

        /**
         * 플레이어가 말했을 때의 콜백 함수입니다
         */
        sayCallback: SayCallback

        /**
        * 아이템이 추가되었을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onAddItem: onAddItem

        /**
        * 유닛이 골드(게임 머니)로 아이템을 샀을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onBuyGameMoneyItem: onBuyGameMoneyItem

        /**
        * 다른 상태 실행 시에 기존 상태가 종료되며 호출되는 이벤트입니다
        * @noSelf
        */
        onEndState: onEndState

        /**
        * 게임에 플레이어가 들어왔을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onJoinPlayer: onJoinPlayer

        /**
        * 플레이어가 게임을 나갔을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onLeavePlayer: onLeavePlayer

        /**
        * 펫 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onPetUnitLevelUp: onPetUnitLevelUp

        /**
        * 유닛이 스탯을 갱신했을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onRefreshStats: onRefreshStats

        /**
        * 아이템이 제거되었을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onRemoveItem: onRemoveItem

        /**
        * 플레이어가 말했을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onSay: onSay

        /**
        * 유닛이 골드(게임 머니) 아이템을 상점에 팔았을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onSellGameMoneyItem: onSellGameMoneyItem

        /**
        * Server.StartState()로 특정 상태를 실행했을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onStartState: onStartState

        /**
        * 매 프레임마다 호출되는 이벤트입니다
        * @noSelf
        */
        onTick: onTick

        /**
        * 거래가 정상적으로 완료되었을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onTradeDone: onTradeDone

        /**
        * 유닛이 죽었을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onUnitDead: onUnitDead

        /**
        * 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onUnitLevelUp: onUnitLevelUp

        /**
        * 유닛이 아이템을 사용했을 때 호출되는 이벤트입니다
        * @noSelf
        */
        onUseItem: onUseItem

        /**
        * 유닛이 파티에 참가할 때 호출되는 콜백 함수입니다
        */
        playerJoinPartyCallback: PlayerJoinPartyCallback

        /**
        * 유닛이 파티에서 나갈 때 호출되는 콜백 함수입니다
        */
        playerLeavePartyCallback: PlayerLeavePartyCallback

        /**
        * 현재 게임에 접속해 있는 플레이어 목록
        */ 
        players: (ServerScript.ScriptRoomPlayer | null)[]

        /**
        * 몬스터가 죽었을 때의 커스텀 보상 콜백 함수입니다
        */
        rewardCallback: RewardCallback


        /**
         * 드롭 아이템을 생성합니다
         * @param dataID 아이템의 데이터 ID
         * @param count 갯수
         * @param [level] 아이템 레벨 (기본: 0)
         */
        CreateDropItem(dataID: number, count: number, level?: number): void


        /**
         * 특정 맵 ID의 필드를 임시로 생성합니다
         * @param mapID 생성할 맵 데이터 ID
         * @returns field 생성된 필드 객체
         */
        CreateField(mapID: number): ServerScript.ScriptField
        
        /**
         * 아이템을 생성합니다
         * @param dataID 아이템 ID (데이터베이스)
         * @param count 갯수
         * @returns item 아이템
         */
        CreateItem(dataID: number, count: number): network.TItem

        /**
         * 파티를 생성합니다
         * @param [name] 파티 이름
         * @param [maxPlayer] 파티의 최대 플레이어 수 (최대: 4)
         * @returns party 파티 정보 객체
         */
        CreateParty(name?: string, maxPlayer?: number): ServerScript.ScriptParty

        /**
         * 스크립트의 작동 시간을 측정합니다.
         * 출력 경로는 해당 프로젝트 폴더/ScriptPlayTimeAverage.txt 의 이름으로 나옵니다.
         * 테스트 플레이에서만 사용 가능합니다.
         */
        ExportAverage (): void

        /**
         * 데이터베이스의 애니메이션 정보를 가져옵니다
         * @param id 
         * @returns animation 
         */
        GetAnimation(id: number): network.TGameAnimation

        /**
         * 데이터베이스의 상태(버프) 정보를 가져옵니다
         * @param id 애니메이션 ID
         * @returns buff 
         */
        GetBuff(id: number): network.TGameBuff

        /**
         * 데이터베이스의 캐릭터 정보를 가져옵니다
         * @param id 
         * @returns character 
         */
        GetCharacter(id: number): network.TGameCharacter 

        /**
         * 데이터베이스의 공용 이벤트 정보를 가져옵니다
         * @param id 
         * @returns common event 
         */
        GetCommonEvent(id: number): network.TGameCommonEvent

        /**
         * 특정 맵 ID의 필드를 가져옵니다
         * @param mapID 
         * @param [channelID] 
         * @returns field 
         */
        GetField(mapID: number, channelID?: number): ServerScript.ScriptField

        /**
         * 데이터베이스의 아이템 정보
         * @param id 
         * @returns item 
         */
        GetItem(id: number): network.TGameItem

        /**
         * 데이터베이스의 직업 정보를 가져옵니다
         * @param id 
         * @returns job 
         */
        GetJob(id: number): network.TGameJob

        /**
         * 맵 데이터 정보를 가져옵니다
         * @param id 
         * @returns map 
         */
        GetMap(id: number): network.TGameMapStub

        /**
         * 데이터베이스의 몬스터 정보를 가져옵니다
         * @param id 
         * @returns monster 
         */
        GetMonster(id: number): network.TGameMonster

        /**
         * 몬스터의 AI를 가져옵니다
         * @param id 
         * @returns monster ai 
         */
        GetMonsterAI(id: number): (monster: ServerScript.ScriptUnit, ai: ScriptEnemyUnitAI, event: AiEvent, data: object) => void

        /**
         * 펫의 AI를 가져옵니다
         * @param id 
         * @returns pet ai 
         */
        GetPetAI(id: number): (pet: ServerScript.ScriptUnit, ai: ScriptPetUnitAI, event: AiEvent, data: object) => void

        /**
         * 데이터베이스의 스킬 정보를 가져옵니다
         * @param id 
         * @returns skill 
         */
        GetSkill(id: number): network.TGameSkill

        /**
         * 데이터베이스의 시스템 용어 정보를 가져옵니다
         * @param id 
         * @returns strings 
         */
        GetStrings(id: number): network.TGameStrings

        /**
         * 데이터베이스의 타일셋 정보를 가져옵니다
         * @param id 
         * @returns tileset 
         */
        GetTileset(id: number): network.TGameTileset

        /**
         * 특정 Topic에 대한 이벤트 콜백을 가져옵니다. (클라이언트에서 보낸 특정 Topic에 대한 이벤트를 처리합니다)
         * @param topic 
         * @returns topic 
         */
        GetTopic(topic: string) : onGetTopic

        /**
         * 월드 변수 값을 가져옵니다 (문자열 형식)
         * @param id 
         * @returns world string var 
         */
        GetWorldStringVar(id: number): string

        /**
         * 월드 변수 값을 가져옵니다
         * @param id 
         * @returns world var 
         */
        GetWorldVar(id: number): number

        /**
         * Http GET 요청을 보내고, 데이터를 가져옵니다
         * @param url 
         * @param func 
         */
        HttpGet(url: string, func: (response: string) => void): void

        /**
         * Http POST 요청을 보내고, 데이터를 가져옵니다
         * @param url 
         * @param data 
         * @param func 
         */
        HttpPost(url: string, data: object, func: (response: string) => void): void

        /**
         * 정해진 시간 후에, 함수를 실행합니다.
         * @param func 
         * @param time 
         */
        RunLater(func: () => void, time: number): void

        /**
         * 가운데에 문자열을 표시합니다
         * @param text 센터 라벨을 표시합니다
         */
        SendCenterLabel(text: string): void


        /**
         * 채팅창에 메세지를 표시합니다
         * @param text 표시할 텍스트
         * @param [color] 색
         */
        SendSay (text: string, color?: number): void

        /**
         * 몬스터의 AI를 등록합니다
         * @param id AI를 적용할 대상 몬스터의 데이터 ID
         * @param func AI 로직 함수
         */
        SetMonsterAI(id: number, func: (monster: ServerScript.ScriptUnit, ai: ScriptEnemyUnitAI, event: AiEvent, data: object) => void): void

        /**
         * 특정 캐릭터로 등록된 펫에 적용되는 AI를 등록합니다
         * @param id AI를 적용할 펫의 캐릭터 I
         * @param func AI 로직 함
         */
        SetPetAI(id: number, func: (pet: ServerScript.ScriptUnit, ai: ScriptPetUnitAI, event: AiEvent, data: object) => void): void

        /**
         * 월드 변수 값을 설정합니다 (문자열 형식)
         * @param id 변수 ID
         * @param value 변수값 (문자열 형식)
         */
        SetWorldStringVar(id: number, value: string): void

        /**
         * 월드 변수 값을 설정합니다
         * @param id 변수 ID
         * @param value 변수값
         */
        SetWorldVar(id: number, value: number): void

        /**
         * 정해진 시간 후에 특정한 State를 실행합니다.
         * @param state 실행할 State
         * @param [time] 실행 시간
         */
        StartState(state: number, time?: number): void

    }

    /**
    * 여러 유틸리티 함수가 있는 스크립트 클래스입니다
    * @noSelf
    */
    interface ScriptUtility {
        /**
         * JSON 파일을 파싱하여 결과를 반환합니다
         */
        JSONParse(json: string): Table
        /** 
        * 테이블을 JSON 문자열로 변환합니다
        */
        JSONSerialize(json: Table): Table

    }
    /**
    * 서버에서 한 게임 유저에 대응하는 클래스입니다. 해당 플레이어의 정보를 가져오거나, 설정할 수 있습니다
    * @noSelf
    */
    interface ScriptRoomPlayer extends ScriptObject {
        /**
         * 현재 플레이어의 레벨의 하나 전 레벨까지 필요한 총 경험치량
         */
        baseEXP: number

        /**
         * 플레이어의 고유 ID
         */
        id: number

        /**
         * 플레이어 이름
         */
        name: string

        /**
         * 플레이어의 현재 누적 경험치
         */
        exp: number

        /**
         * 플레이어의 레벨
         */
        level: number

        /**
         * 현재 플레이어의 레벨까지 필요한 총 경험치 양
         */
        maxEXP: number

        /**
         * 플레이어가 속한 클랜 객체
         */
        clan: ServerScript.ScriptClan

        /**
         * 플레이어가 속한 클랜의 ID
         */
        clanID: number

        /**
         * 플레이어의 유닛(ScriptUnit) 객체
         */
        unit: ServerScript.ScriptUnit

        /**
         * 커스텀 데이터
         */
        customData: Table

        /**
         * 설정한 스코어 값
         */
        score: number

        /**
         * 팀 값 (0 ~ 3 : 1팀 ~ 4팀)
         */
        team: number
    }

    /**
    * 루아 스크립트 상의 함수를 이벤트 등록에 사용 가능하게 해주는 클래스입니다
    * @noSelf
    */
    interface ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: Function): void
    }

    /**
    * 아이템이 추가되었을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onAddItem extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (unit:ServerScript.ScriptUnit, titem: network.TItem)=> void): void
    }

    /**
    * 유저가 채팅을 입력했을때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onSay extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (unit:ServerScript.ScriptUnit, text: string) => void): void
    }
    
    /**
    * 클라이언트로부터 메세지를 받았을때의 이벤트입니다
    * @noSelf
    */
    interface onGetTopic extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (...args: (string | number)[]) => void): void
    }

    /**
    * 유닛이 골드(게임 머니)로 아이템을 샀을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onBuyGameMoneyItem extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (unit: ServerScript.ScriptUnit, itemID: number, count: number) => void): void
    }

    /**
    * 다른 상태 실행 시에 기존 상태가 종료되며 호출되는 이벤트입니다
    * @noSelf
    */
    interface onEndState extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (state: number) => void): void
    }

    /**
    * 게임에 플레이어가 들어왔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onJoinPlayer extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (player: ServerScript.ScriptRoomPlayer) => void): void
    }

    /**
    * 플레이어가 게임을 나갔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onLeavePlayer extends ScriptEventPublisher {
        /**
        * 이 이벤트가 발생했을 때, 호출할 루아 함수를 등록합니다
        */
        Add(func: (player: ServerScript.ScriptRoomPlayer) => void): void
    }

    /**
    * 펫 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다.
    * @noSelf
    */
    interface onPetUnitLevelUp extends ScriptEventPublisher {
        /**
        * 펫 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다.
        */
        Add(func: (pet: ServerScript.ScriptUnit, level: number) => void): void
    }

    /**
    * 유닛이 스탯을 갱신했을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onRefreshStats extends ScriptEventPublisher {
        /**
        * 유닛이 스탯을 갱신했을 때 호출되는 이벤트입니다
        * [1] unit: 스탯을 갱신한 유닛
        */
        Add(func: (unit: ServerScript.ScriptUnit) => void): void
    }

    /**
    * 아이템이 제거되었을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onRemoveItem extends ScriptEventPublisher {
        /**
        * 아이템이 제거되었을 때 호출되는 이벤트입니다
        * unit: 아이템이 제거된 유닛
        * [2] item: 제거된 아이템
        */
        Add(func: (unit: ServerScript.ScriptUnit, titem: network.TItem) => void): void
    }

    /**
    * 유닛이 골드(게임 머니) 아이템을 상점에 팔았을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onSellGameMoneyItem extends ScriptEventPublisher {
        /**
        * 유닛이 골드(게임 머니) 아이템을 상점에 팔았을 때 호출되는 이벤트입니다
        * [1] unit: 아이템이 제거된 유닛
        * [2] item: 제거된 아이템
        */
        Add(func: (unit: ServerScript.ScriptUnit, titem: network.TItem) => void): void
    }

    /**
    * Server.StartState()로 특정 상태를 실행했을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onStartState extends ScriptEventPublisher {
        /**
        * Server.StartState()로 특정 상태를 실행했을 때 호출되는 이벤트입니다
        * [1] state: 해당 State 번호
        */
        Add(func: (state: number) => void): void
    }

    /**
    * 매 프레임마다 호출되는 이벤트입니다
    * @noSelf
    */
    interface onTick extends ScriptEventPublisher {
        /**
        * 매 프레임마다 호출되는 이벤트입니다
        * [1] dt: Delta time
        */
        Add(func: (dt: DeltaTime) => void): void
    }

    /**
    * 거래가 정상적으로 완료되었을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onTradeDone extends ScriptEventPublisher {
        /**
        * 거래가 정상적으로 완료되었을 때 호출되는 이벤트입니다
        * [1] sender: 거래를 시작한 유닛
        * [2] receiver: 거래를 받은 유닛
        * [3] senderItems: 거래를 시작한 유닛이 보낸 아이템 정보 테이블 (TItem)
        * [4] receiverItems: 거래를 받은 유닛이 보낸 아이템 정보 테이블 (TItem)
        */
        Add(func: (sender: ServerScript.ScriptUnit, receiver: ServerScript.ScriptUnit, snederItems: network.TItem, receiverItems: network.TItem) => void): void
    }

    /**
    * 유닛이 죽었을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onUnitDead extends ScriptEventPublisher {
        /**
        * 유닛이 죽었을 때 호출되는 이벤트입니다
        * [1] target: 죽은 유닛 객체
        * [2] attacker: 공격한 유닛 객체 (nil 이면 자살)
        */
        Add(func: (target: ServerScript.ScriptUnit, attacker: ServerScript.ScriptUnit | undefined) => void): void
    }

    /**
    * 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onUnitLevelUp extends ScriptEventPublisher {
        /**
        * 유닛의 레벨이 올랐을 때 호출되는 이벤트입니다
        * [1] unit: 레벨업한 대상 유닛 객체
        */
        Add(func: (target: ServerScript.ScriptUnit, attacker: ServerScript.ScriptUnit | undefined) => void): void
    }

    /**
    * 유닛이 아이템을 사용했을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onUseItem extends ScriptEventPublisher {
        /**
        * 유닛이 아이템을 사용했을 때 호출되는 이벤트입니다
        * [1] unit: 레벨업한 대상 유닛 객체
        * [2] item: 사용한 아이템
        */
        Add(func: (target: ServerScript.ScriptUnit, item: network.TItem) => void): void
    }

    /**
     * 하나의 유닛에 대응하는 클래스입니다. 유닛의 정보를 가져오거나 설정할 수 있습니다
     * @noSelf
    */
    interface ScriptUnit extends ScriptObject {
        /**
         * 유닛의 민첩 스탯
         */
        agi: number
        /**
         * 유닛의 민첩 스탯
         */
        agility: number
        /**
         * 유닛의 공격력 스탯
         */
        atk: number

        /**
         * 유닛의 공격력 스탯
         */
        attack: number
        

        /**
         * 유닛의 버프를 ScriptUnitBuff 형식으로 얻어옵니다
         */
        buffs: Array<ScriptUnitBuff>

        /**
         * 유닛의 데이터를 TGameCharacter 형식으로 얻어옵니다
         */
        characterData: network.TGameCharacter

        /**
         * 유닛의 캐릭터 ID
         */
        characterID: number

        /**
         * 플레이어 유닛의 누적 경험치
         */
        cumulativeEXP: number

        /**
         * 유닛의 방어력 스탯
         */
        def: number

        /**
         * 유닛의 방어력 스탯
         */
        defense: number

        /**
         * 유닛의 X 방향 좌표
         */
        dirX: number

        /**
         * 유닛의 Y 방향 좌표
         */
        dirY: number

        /**
         * 플레이어 유닛의 현재 경험치
         */
        exp: number

        /**
         * 유닛의 현재 피로도
         */
        fatigue: number

        /**
         * 이 유닛이 접속해 있는 필드의 객체 (ScriptField) 
         */
        field: ScriptField


        /**
         * 유닛이 가진 골드 (이 유닛이 플레이어 유닛일 경우에만 동작합니다)
         */
        gameMoney : number

        /**
         * 유닛의 현재 체력
         */
        hp: number

        /**
         * 유닛의 고유 ID
         */
        id: number

        /**
         * 이 몬스터 유닛이 처음 접속한 맵(필드)의 ScriptField 객체
         */
        initField : ScriptField

        /**
         * 이 플레이어가 게임 관리자(마스터)인지 반환합니다
         */
        isGM: boolean

        /**
         * 유닛의 직업
         */
        job: number

        /**
         * 유닛의 레벨
         */
        level: number

        /**
         * 유닛의 행운 스탯
         */
        lucky: number

        /**
         * 유닛의 마법 공격력 스탯
         */
        magicAtk: number

        /**
         * 유닛의 마법 공격력 스탯
         */
        magicAttack: number

        /**
         * 유닛의 마법 방어력 스탯
         */
        magicDef: number

        /**
         * 유닛의 마법 방어력 스탯
         */
        magicDefense: number

        /**
         * 유닛의 무게
         */
        mass: number

        /**
         * 유닛의 최대 체력
         */
        maxHP: number

        /**
         * 유닛의 최대 마력
         */
        maxMP: number

        /**
         * 유닛의 몬스터 데이터
         */
        monsterData: network.TGameMonster

        /**
         * 유닛의 몬스터 ID
         */
        monsterID: number

        /**
         * 유닛의 이동속도
         */
        moveSpeed: number

        /**
         * 유닛의 현재 마력
         */
        mp: number

        /**
         * 유닛의 이름
         */
        name: string

        /**
         * 유닛의 이름 색
         */
        nameColor: ScriptColor

        /**
         * 현재 유닛이 참가한 파티의 데이터를 얻어옵니다.
         */
        party: ServerScript.ScriptParty

        /**
         * 유닛이 속한 파티의 ID
         */
        partyID: number

        /**
         * 유닛의 플레이어 객체 (이 유닛이 플레이어 유닛일 경우에만 동작합니다)
         */
        player: ServerScript.ScriptRoomPlayer

        /**
         * 유닛의 팀 태그
         */
        teamTag: number

        /**
         * 유닛의 종류 (0: 플레이어, 1: 이벤트, 2: 몬스터)
         */
        type: number

        /**
         * 유닛의 X 좌표
         */
        x: number

        /**
         * 유닛의 Y 좌표
         */
        y: number

        /**
         * 클라이언트에게 Topic에 대한 이벤트를 보냅니다
         * @param topic 보낼 Topic
         * @param args 함께 보낼 인자들
         */
        FireEvent(topic: string, ...args: any[]): void

        /**
         * 해당 유닛에 상태를 추가합니다
         * @param buffID 버프 ID
         * @param [ScriptUnit] 공격한 유닛
         */
        AddBuff (buffID: number, ScriptUnit? :ScriptUnit): void

        /**
         * 이 유닛에게 피해(데미지)를 입힙니다
         * (단 몬스터 대상으로 해당 함수를 사용시 공격자를 판별할 수 없으므로 보상이 지급되지 않습니다)
         * @param damage 입힐 데미지
         * @param [skillDataID] 스킬의 공식을 사용시 공식을 적용할 스킬의 ID (기본값: -1(공식 미적용))
         * @param [critical] 치명타(크리티컬)의 발생 유무
         */
        AddDamage (damage: number, skillDataID?: number, critical?: boolean): void

        /**
         * 이 유닛에게 피해(데미지)를 입힙니다
         * (이 함수에서는 공격자를 판별할 수 있으므로 몬스터 대상 공격 시 보상이 지급됩니다)
         * @param ScriptUnit 공격자
         * @param damage 피해량(데미지)
         * @param [skillDataID] 스킬의 공식을 사용시 공식을 적용할 스킬의 ID (기본값: -1(공식 미적용))
         * @param [critical] 치명타(크리티컬)의 발생 유무
         */
        AddDamageBy (ScriptUnit :ScriptUnit, damage: number, skillDataID?: number, critical?: boolean): void

        /**
         * 유닛에게 경험치를 지급합니다 (플레이어 유닛일 경우에만 동작합니다)

         * @param amount 지급할 경험치의 양
         */
        AddEXP (amount: number): void

        /**
         * 유닛의 피로도를 채웁니다 (플레이어 유닛일 경우에만 동작합니다)
         * @param amount 채워줄 양
         */
        AddFatigue(amount: number): void

        /**
         * 유닛에게 골드를 지급합니다 (플레이어 유닛일 경우에만 동작합니다)
         * @param amount 지급할 골드의 양
         */
        AddGameMoney(amount: number): void

        /**
         * 유닛의 HP를 회복시킵니다
         * @param amount 회복시킬 양
         */
        AddHP(amount: number): void

        /**
         * 유닛에게 아이템을 추가합니다 (플레이어 유닛일 경우에만 동작합니다)
         * @param dataID 추가할 아이템의 ID
         * @param [count] 추가할 수량
         * @param [notify] 알림 표시 여부 (True/False)
         */
        AddItem(dataID: number, count?: number, notify?: boolean): void

        /**
         * 유닛에게 TItem 형식으로 아이템을 추가합니다 (플레이어 유닛일 경우에만 동작합니다)
         * @param item 추가할 아이템 객체(TItem)
         * @param [notify] 알림 표시 여부 (True/False)
         */
        AddItemByTItem(item: network.TItem, notify?: boolean): void

        /**
         * 유닛의 MP를 회복시킵니다
         * @param amount 회복시킬 양
         */
        AddMP(amount: number): void

        /**
         * 신규 펫을 추가 등록하고 등록된 ID를 가져옵니다
         * @param [characterID] 펫의 캐릭터 ID (기본값: 0)
         * @param [jobID] 펫의 직업 ID (기본값: 0)
         * @param [name] 펫의 이름 (기본값: 펫 캐릭터의 이름)
         * @returns pet 
         */
        AddPet(characterID?: number, jobID?: number, name?: string): number

        /**
         * 유닛에게 스킬을 추가합니다 (플레이어 유닛일 경우에만 동작합니다)
         * @param [dataID] 추가할 스킬의 ID
         * @param [level] 추가할 스킬의 레벨
         * @param [notiry] 알림 표시 여부 (True/False)
         */
        AddSkill(dataID?: number, level?: number, notiry?: number): void


        // CancelPetSummon

        // ClearAllBuffs

        // ClearBuffAnimations

        // CountItem

        // DropItem

        // DropItemByDataID

        // EquipItem

        // GetAllRegistedPetData

        // GetEquipItem

        // GetRegistedPetDataByPetID

        // GetRegistedPetID

        // GetSingleSummonedPet

        // GetSkill

        // GetSkillLevel

        // GetStat

        // GetStringVar
        
        /**
         * 플레이어 유닛의 변수 값을 가져옵니다
        */
        GetVar (id: number): number

        // HasBuff

        // HasSkill

        // IsCollectionCompleted

        // IsEquippedItem

        // IsEquippedItemByDataID

        // KnockbackFromUnit

        // LeaveField

        // MakeKnockback

        // MakeSturn

        // PlayME

        // PlaySE

        // PullFromUnit

        // RefreshStats

        // RemoveAllSkills

        // RemoveBuff

        // RemoveCollection

        // RemoveItem

        // RemoveItemByID

        // RemoveSkill

        // RespawnAt

        // Say

        // SendCenterLabel

        // SendSay

        // SendUpdated

        // SerVar

        // SetJob

        // SetPetUnit

        // SetQuickSlot

        // SetSkillLevel

        // SetStat

        // SetStringVar

        // ShowAnimation

        // SpawnAt

        // SpawnAtField

        // SpawnAtFieldID

        // SpawnPet

        // StartGlobalEvent

        // StopAnimation

        // UnequipItem

        // UnregisterPet

        // UseFatigue

        // UseGameMoney
    }

    /**
     * 하나의 유닛 버프에 대응하는 클래스입니다
     * @noSelf
     */
    interface ScriptUnitBuff {

        /**
         * 버프 ID (데이터베이스)
         */
        dataID: number;

        /**
         * 버프의 종료 시각입니다. os.date("*t",untilAt) 을 통한 시간 가공이 필요합니다
         */
        untilAt: number;

        /**
         * 해당 버프를 제거합니다
         */
        Destroy(): void
    }

    /**
     * 서버에서 필드를 관리하는 객체입니다. 하나의 필드에 대응합니다
     * @noSelf
     */
    interface ScriptField extends ScriptObject{

        /**
         * 필드의 채널 ID
         */
        channelID: number

        /**
         * 필드의 데이터 ID
         */
        dataID: number

        /**
         * 해당 필드에 있는 모든 드랍 아이템을 배열 형식으로 가져옵니다
         */
        dropItems: (ServerScript.ScriptDropItem | null)[]

        /**
         * 필드의 세로 크기
         */
        height: number

        /**
         * 필드의 최대 플레이어 수
         */
        maxPlayers: number

        /**
         * 필드의 이름
         */
        name: string

        /**
         * 해당 필드에 드랍 아이템이 들어왔을 때 호출되는 이벤트입니다
         */
        onJoinDropItem: onJoinDropItem

        /**
         * 해당 필드에 유닛이 들어왔을 때 호출되는 이벤트입니다
         */
        onJoinField: onJoinField

        /**
         * 해당 필드에 드랍 아이템이 나갔을 때 호출되는 이벤트입니다
         */
        onLeaveDropItem: onLeaveDropItem

        /**
         * 해당 필드에서 유닛이 나갔을 때 호출되는 이벤트입니다
         */
        onLeaveField: onLeaveField

        /**
         * 필드의 현재 플레이어 수
         */
        playerCount: number

        /**
         * 해당 필드에 있는 모든 플레이어 유닛을 배열 형식으로 가져옵니다
         */
        playerUnits: (ServerScript.ScriptUnit | null)[]

        
        /**
         * 해당 필드에 있는 모든 유닛을 배열 형식으로 가져옵니다
         */
        units: (ServerScript.ScriptUnit | null)[]


        /**
         * 필드의 가로 크기
         */
        width: number


        /**
         * 필드의 모든 유닛들을 순회하며 가장 큰 값을 반환한 유닛을 가져옵니다
         * @param x 거리를 찾는 기준이 될 유닛의 위치 X
         * @param y 거리를 찾는 기준이 될 유닛의 위치 Y
         * @param dist 찾을 거리 범위
         * @param func 조건 반환 콜백 함수 (인자로 유닛 객체를 받고, 숫자 형식의 값을 반환합니다)
         * @param [findType]  탐색할 유닛 타입 (0: 플레이어, 1: 이벤트 유닛 , 2: 적)
         * @param [without]  제외할 유닛
         * @returns maximum unit 찾은 유닛 (실패: nil)
         */
        FindMaximumUnit(x: number, y: number, dist: number, func: (unit: ServerScript.ScriptUnit) => any, findType?: number, without?: ServerScript.ScriptUnit): ScriptUnit | null

        /**
         * 필드의 모든 유닛들을 순회하며 가장 작은 값을 반환한 유닛을 가져옵니다
         * @param x 거리를 찾는 기준이 될 유닛의 위치 X
         * @param y 거리를 찾는 기준이 될 유닛의 위치 Y
         * @param dist 찾을 거리 범위
         * @param [findType]  탐색할 유닛 타입 (0: 플레이어, 1: 이벤트 유닛 , 2: 적)
         * @param [without]  제외할 유닛
         * @returns 찾은 유닛 (실패: nil)
         */
        FindMinimumUnit(x: number, y: number, dist: number, func: (unit: ServerScript.ScriptUnit) => any, findType?: number, without?: ServerScript.ScriptUnit): ScriptUnit | null

        /**
         * 필드에서 지정된 위치와 가장 가까운 드랍 아이템을 가져옵니다
         * @param x 거리를 찾는 기준이 될 유닛의 위치 X
         * @param y 거리를 찾는 기준이 될 유닛의 위치 Y
         * @param dist 찾을 거리 범위
         * @returns 찾은 아이템 (실패: nil)
         */
        FindNearDropItem(x: number, y: number, dist: number): ServerScript.ScriptDropItem | null

        /**
         * 필드에서 지정된 위치와 가장 가까운 유닛을 가져옵니다
         * @param x 거리를 찾는 기준이 될 유닛의 위치 X
         * @param y 거리를 찾는 기준이 될 유닛의 위치 Y
         * @param dist 찾을 거리 범위
         * @param [findType]  탐색할 유닛 타입 (0: 플레이어, 1: 이벤트 유닛 , 2: 적)
         * @param [without]  제외할 유닛
         * @returns 찾은 유닛 (실패: nil)
         */
        FindNearUnit(x: number, y: number, dist: number, findType?: number, without?: ServerScript.ScriptUnit): ScriptUnit | null

        /**
         * 필드에서 해당 조건에 맞는 유닛을 찾아 가져옵니다
         * @param x 거리를 찾는 기준이 될 유닛의 위치 X
         * @param y 거리를 찾는 기준이 될 유닛의 위치 Y
         * @param dist 찾을 거리 범위
         * @param func 조건 반환 콜백 함수 (인자로 유닛 객체를 받고, 숫자 형식의 값을 반환합니다)
         * @param [findType]  탐색할 유닛 타입 (0: 플레이어, 1: 이벤트 유닛 , 2: 적)
         * @param [without]  제외할 유닛
         * @returns maximum unit 찾은 유닛 (실패: nil)
         */
        FindUnit(x: number, y: number, dist: number, func: (unit: ServerScript.ScriptUnit) => any, findType?: number, without?: ServerScript.ScriptUnit): ScriptUnit | null

        /**
         * 필드 변수 값을 가져옵니다
         * @param name 가져올 이벤트 유닛의 이름
         * @returns event unit by name 
         */
        GetEventUnitByName(name: string): ServerScript.ScriptUnit | null

        /**
         * 필드에 있는 이벤트 유닛을 이름을 통해 가져옵니다
         * @param id 필드 변수 값을 가져옵니다
         * @returns 필드 변수값
         */
        GetFieldVar(id: number): number

        /**
         * 필드에 있는 유닛을 유닛 ID를 통해 가져옵니다
         * @param id 가져올 유닛의 ID
         * @returns unit 가져온 유닛
         */
        GetUnit(id: number): ServerScript.ScriptUnit | null

        /**
         * 드랍 아이템을 이 필드에 접속시킵니다
         * @param dropItem ScriptDropItem 객체
         * @param [position] 접속 시의 아이템 좌표
         */
        JoinDropItem(dropItem: ServerScript.ScriptDropItem, position?: ServerScript.ScriptPoint): void 

        /**
         * 유닛을 이 필드에 접속시킵니다
         * @param unit 유닛의 ScriptUnit 객체
         * @param [position] 접속 시의 유닛 좌표
         */
        JoinUnit(unit: ServerScript.ScriptUnit, position?: ServerScript.ScriptPoint): void 

        /**
         * 필드에 있는 모든 플레이어들의 화면에 센터 라벨을 표시합니다
         * @param text 화면에 표시할 라벨의 문구(텍스트
         */
        SendCenterLabel(text: string): void

        /**
         * 필드 변수 값을 설정합니다
         * @param id 변수 ID
         * @param value 변수값
         */
        SetFieldVar(id: number, value: string): void

        /**
         * 몬스터를 소환합니다
         * @param dataID 소환할 몬스터의 ID
         * @param x 소환할 위치 X
         * @param y 소환할 위치 Y
         * @returns 성공 여부 (True/False)
         */
        SpawnEnemy(dataID: number, x: number, y: number): boolean
    }


    /**
    * 해당 필드에 유닛이 들어왔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onJoinField extends ScriptEventPublisher {
        /**
        해당 필드에 유닛이 들어왔을 때 호출되는 이벤트입니다
        호출될 함수의 인자 형식: function(ScriptField field, ScriptUnit unit)

        [1] field: 해당 필드
        [2] unit: 필드에 들어온 유닛
        */
        Add(func: (field: ServerScript.ScriptField, unit: ServerScript.ScriptUnit) => void): void
    }

    /**
    * 해당 필드에 드랍 아이템이 들어왔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onJoinDropItem extends ScriptEventPublisher {
        /**
        해당 필드에 드랍 아이템이 들어왔을 때 호출되는 이벤트입니다
        호출될 함수의 인자 형식: function(ScriptField field, ScriptDropItem dropItem)

        [1] field: 해당 필드
        [2] dropItem: 드랍된 아이템
        */
        Add(func: (field: ServerScript.ScriptField, dropItem: ServerScript.ScriptDropItem) => void): void
    }

    /**
    * 해당 필드에 드랍 아이템이 나갔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onLeaveDropItem extends ScriptEventPublisher {
        /**
        해당 필드에 드랍 아이템이 나갔을 때 호출되는 이벤트입니다
        호출될 함수의 인자 형식: function(ScriptField field, ScriptDropItem dropItem)

        [1] field: 해당 필드
        [2] dropItem: 드랍된 아이템
        */
        Add(func: (field: ServerScript.ScriptField, dropItem: ServerScript.ScriptDropItem) => void): void
    }

    /**
    * 해당 필드에서 유닛이 나갔을 때 호출되는 이벤트입니다
    * @noSelf
    */
    interface onLeaveField extends ScriptEventPublisher {
        /**
        해당 필드에서 유닛이 나갔을 때 호출되는 이벤트입니다
        호출될 함수의 인자 형식: function(ScriptField field, ScriptUnit unit)
        [1] field: 해당 필드
        [2] unit: 필드를 나간 유닛
        */
        Add(func: (field: ServerScript.ScriptField, unit: ServerScript.ScriptUnit) => void): void
    }


    /**
     * 한 파티에 대응하는 클래스입니다. 해당 파티의 정보를 얻거나 파티를 조작할 때 사용합니다
     */
    interface ScriptParty {

    }

    /**
     * 
     */
    interface ScriptPetUnitAI {

    }

    /**
     * 
     */
    interface ScriptEnemyUnitAI {

    }

    /**
     * 필드에 드랍된 아이템에 대응하는 클래스입니다
     */
    interface ScriptDropItem {

    }

    /**
     * 하나의 점을 나타내는 클래스입니다. (X, Y)
     * @noSelf
     */
     interface ScriptPoint {

        x: number
        y: number

        (x:number, y:number): ScriptPoint
    }
    
    
    /**
     * 색을 나타내는 클래스입니다
     * @noSelf
     */
     interface ScriptColor {

        a: number
        b: number
        g: number
        r: number

        (a: number, b: number, g: number, r: number): ScriptColor
    }
    
}

