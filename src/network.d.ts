/** @noSelfInFile **/

declare namespace network {

    /**
     * 케릭터의 데이터베이스 정보
    */
    abstract class TGameCharacter {
        /**
         * 케릭터의 이름
        */
        name: string
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
     * 데이터베이스 애니매이션 정보
    */
    interface TGameAnimation {



    }

    /**
     * 데이터베이스 버프정보
    */
    interface TGameBuff {

    }

    /**
     * 데이터베이스 케릭터정보
    */
    interface TGameCharacter {

    }

    /**
     * 데이터베이스 공용이벤트 정보
    */
    interface TGameCommonEvent {

    }

    /**
     * 데이터베이스 아이템정보
    */
    interface TGameItem {

    }

    /**
     * 데이터베이스 직업정보
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


    

}