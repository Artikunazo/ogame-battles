<?php

namespace models;

class mBattles{
    private static function getBase(){
        return mDatabase::getInstance()->getBase();
    }

    public static function getAllBattles(){
        return self::getBase()->exec("select banner_battle as 'banner', summary_battle as 'summary' from battles order by date_battle desc;");
    }

    public static function addNewBattle($data){
        return self::getBase()->exec("insert into battles(banner_battle, summary_battle) values (?, ?)", 
            array(
                $data['banner'],
                $data['summary']
            )
        );
    }
}