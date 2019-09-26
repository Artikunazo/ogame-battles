<?php

namespace models;

use Database;

class mBattles{
    private static function getBase(){
        return mDatabase::getInstance()->getBase();
    }

    public static function getAllBattles(){
        return self::getBase()->exec("select banner_battle as 'banner', summary_battle as 'summary' from battles;");
    }

    public static function addNewBattle($data){
        return self::getBase()->exec("insert into battles(banner_battle, summary_battle) values (?, ?)", 
            array(
                $data['banner'],
                base64_encode($data['summary'])
            )
        );
    }
}