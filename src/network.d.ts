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

        oldTraits: network.TGameTrait

        showAnimation: boolean

        showAnimationID: number

        tickTime: number

        traits: network.TGameMapEventCommand

        type: number
    }

    
    /**
     * 데이터베이스 도감정보
    */
    interface TGameCollection {

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
     * 데이터베이스 아이템정보
    */
    interface TGameItem {

    }


    /**
     * 데이터베이스 직업정보
    */
    interface TGameJob {

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