<?php

namespace models;

class mDatabase{
    public static function getBase() {
        $base = new \DB\SQL(
            'mysql:host=localhost;port=3306;dbname=artikuna_ogame',
            'artikuna_ogAdmin',
            'Artik{94};'
        );         
        return $base;
    }
}