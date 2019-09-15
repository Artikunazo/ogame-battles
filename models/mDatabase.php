<?php

namespace models;

class Database{
    public static function getBase() {
        $base = new \DB\SQL(
            'mysql:host=localhost;port=3306;dbname=artikuna_ogame',
            'artikuna_ogAdmin',
            'Artik{94};'
        );         
        return $base;
    }
}