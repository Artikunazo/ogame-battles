<?php

namespace models;

use Database;

class Battles{
    private static function getBase(){
        return mDatabase::getBase();
    }

    public static function getAllBattles(){
        return self::getBase()->exec("select * from battles;");
    }
}