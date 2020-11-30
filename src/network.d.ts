/** @noSelfInFile **/

declare namespace network {

    
    /**
     * 데이터베이스 애니매이션 정보
    */
    interface TGameAnimation {
        commands: network.TGameAnimationCommand[]

        imageID: number

        l_name: string

        name: string

        persistentTeleport: boolean
    }

    
    /**
     * 애니메이션 커맨드
    */
    interface TGameAnimationCommand {
        actionName: string

        collisionAnimationID: number

        collisionOffsetX: number

        collisionOffsetY: number

        collisionRadius: number

        collisionWall: boolean

        deleteOnCollision: boolean

        directionSync: boolean

        endColor: number

        endScaleX: number

        endScaleY: number

        followUnit: true

        gravityX: number

        gravityY: number

        includeEnemy: boolean

        includeSameTeam: boolean

        includeSelf: boolean

        lifetime: number

        maxCollisions: number

        moveSpeedX: number

        moveSpeedY: number

        playCommonEventID: number

        randomOffsetX: number

        randomOffsetY: number

        rotationByFront: number

        rotationToDir: boolean

        sortingBack: boolean

        soundID: number

        startColor: number

        startDirOffsetX: number

        startDirOffsetY: number

        startOffsetX: number

        startOffsetY: number

        startScaleX: number

        startScaleY: number

        targetFlashColor: number

        targetFlashTime: number

        type: number
    }

    /**
     * 케릭터의 데이터베이스 정보
    */
    abstract class TGameCharacter {

        collision: boolean

        footstepSoundID: number

        imageID: number

        jumpForce: boolean

        l_name: string

        memo: string

        moveSpeed: number

        name: string

        traits: network.TGameMapEventCommand[]

        type: number

        useCloudCharacter: boolean
    }

    
    /**
     * 아이템 객체
    */
    interface TItem {

        /**
         * 갯수
        */
        count: number

        /**
         * 데이터베이스 id
        */      
        dataID: number

        /**
         * 아이템의 고유아이디
        */      
        id: number   

        /**
         * 아이템의 인덱스
         */
        index: number

        /**
         * 교환중인가
         */
        inTrade: boolean

        /**
         * 아이템의 강화레벨
         */
        level: number

        /**
         * 아이템의 옵션
         */
        readonly option: TItemOption[]

        /**
         * 클라우드 리소스를 사용하고 있는가
         */
        useCloudResource: boolean

    }



    /**
     * 아이템 옵션
    */
    interface TItemOption {

        /**
         * 스테이터스 아이디
         */
        statID: number

        /**
         * 스테이터스 타입
         */
        type: number

        /**
         * 스테이터스 값
         */
        value: number

    }


    /**
     * 데이터베이스 버프정보
    */
    interface TGameBuff {
        damageFormula: string

        damageType: number

        debuffCondition: number

        debuffTime: number

        desc: string

        hasCritical: boolean

        iconID: number

        isRemoveBuff: boolean

        l_desc: string

        l_name: string

        memo: string

        name: string

        oldTraits: network.TGameTrait[]

        showAnimation: boolean

        showAnimationID: number

        tickTime: number

        traits: network.TGameMapEventCommand[]

        type: number
    }

    
    /**
     * 데이터베이스 도감정보
    */
    interface TGameCollection {
        desc: string

        iconID: number

        itemCount1: number

        itemCount2: number

        itemCount3: number

        itemCount4: number

        itemID1: number

        itemID2: number

        itemID3: number

        itemID4: number

        l_desc: string

        l_name: string

        memo: string

        name: string

        rewardGameMoney: number

        rewardItemCount1: number

        rewardItemCount2: number

        rewardItemID1: number

        rewardItemID2: number

        traits: network.TGameMapEventCommand
    }


    /**
     * 데이터베이스 공용이벤트 정보
    */
    interface TGameCommonEvent {

        conditionSwitch1ID: number

        l_name: string

        name: string

        /**
         * 주의!! 네코랜드에서 참조시 에러 발생
         */
        page: network.TGameMapEventPage

        startCondition: number

        targetPlayerSelector: number[]


    }

    /**
     * 데이터베이스 드랍아이템 정보
    */
    interface TGameDropItem {
        itemDataID: number

        itemLevel: number

        maxCount: number

        minCount: number

        percent: number

    }

    /**
     * 데이터베이스 아이템정보
    */
    interface TGameItem {

        actionName: string

        agility: number

        animationID: number

        attack: number

        buyerPrice: number

        canDrop: boolean

        canExchangeTrade: boolean

        canSell: boolean

        canStorage: boolean

        canTrade: boolean

        coolTime: number

        damageFormula: string

        damageType: number

        defense: number

        desc: string

        hasCritical: boolean

        imageID: number

        l_desc: string

        l_name: string

        lucky: number

        magicAttack: number

        magicDefense: number

        maxCount: number

        maxHP: number

        maxMP: number

        memo: string

        name: string

        notConsumed: boolean

        oldTraits: network.TGameTrait[]

        sellerPrice: number

        spineImageID: number

        traits: network.TGameMapEventCommand[]

        type: number
    }


    /**
     * 데이터베이스 직업정보
    */
    interface TGameJob {
        agilities: number[]

        attacks: number[]

        defenses: number[]

        exps: number[]

        l_name: string

        learnSkills: network.Tskill[]

        luckies: number[]

        magicAttacks: number[]

        magicDefenses : number[]

        maxHPs: number[]

        maxLevel : number

        maxMPs: number[]

        memo: string

        name: string

        oldTraits: network.TGameTrait[]

        traits: network.TGameMapEventCommand[]
    }

    /**
     * 데이터베이스 레이아웃 정보
    */
    interface TGameLayoutPage {

    }

    /**
     * 데이터베이스 맵정보
    */
    interface TGameMapStub {

    }

    /**
     * 데이터베이스 몬스터정보
    */
    interface TGameMonster {
        agility: number

        attack: number

        attackOffsetX: number

        attackOffsetY: number

        attackRange: number

        attackTime: number

        attackType: number

        collision: boolean

        collisionWithMap: boolean

        consumeFatigue: number

        defense: number

        dropEXP: number

        dropItems: network.TGameDropItem

        dropMaxGameMoney: number

        dropMinGameMoney: number

        imageID: string

        isDirectGiveItem: boolean

        l_name: string

        lucky: number

        magicAttack: number

        magicDefense: number

        maxHP: number

        maxLevel: number

        maxMP: number

        memo: string

        minLevel: number

        moveSpeed: number

        moveStyle: number

        name: string

        respawnTime: number

        teamTag: number

        traits: network.TGameTrait[]
    }

    /**
     * 데이터베이스 파노라마 정보
    */
    interface TGamePanorama {

    }

    /**
     * 데이터베이스 스킬정보
    */
    interface TGameSkill {
        
    }
    /**
     * 데이터베이스 시스템용어정보
    */
    interface TGameStrings {

    }

    /**
     * 데이터베이스 타일셋정보
    */
    interface TGameTileset {

    }

    
    /**
     * 데이터베이스 몬스터정보
    */
    interface TGameMonster {

    }
    
    /**
     * 데이터베이스 몬스터정보
    */
    interface TOnlinePetData {

    }

        
    /**
     * 스킬
    */
    interface Tskill {
        
        /**
         * 데이터아이디
         */
        dataID: number

        /**
         * 이 스킬의 레벨
         */
        level: number

        
        /**
         * 초기레벨
         */
        initLevel: number

    }

        
    /**
     * 맵이벤트 커맨드(네코독에 없음)
    */
    interface TGameMapEventCommand {


    }

    /**
     * 특성(네코독에 없음)
    */
    interface TGameTrait {


    }

    /**
     * 맵이벤트 페이지(네코독에 없음)
    */
    interface TGameMapEventPage {


    }

    
}