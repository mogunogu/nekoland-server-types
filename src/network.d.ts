

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

}