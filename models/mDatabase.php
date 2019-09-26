<?php

namespace models;

class mDatabase{
    private static $instance;

    public function getBase() {
        $base = new \DB\SQL(
            'mysql:host=localhost;port=3306;dbname=artikuna_ogame',
            'artikuna_ogAdmin',
            'Artik{94};'
        );         
        return $base;
    }

    public static function getInstance(){
        if(!isset($instance)){
            self::$instance = new mDatabase;
        }
        return self::$instance;
    }
}