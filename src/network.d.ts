

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
     * 아이템 클래스
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
         * 아이디
        */      
        id: number   


    }
}