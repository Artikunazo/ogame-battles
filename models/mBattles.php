<?php

namespace models;

use Database;

class mBattles{
    private static function getBase(){
        return mDatabase::getBase();
    }

    public static function getAllBattles(){
        return self::getBase()->exec("select banner_battle as 'banner', summary_battle as 'summary' from battles;");
    }
}