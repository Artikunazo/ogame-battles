<?php

namespace controllers;

class Battles{
    public static function showAllbattles($f3){
        $f3->set('title', 'Todas las batallas');
        echo \Template::instance()->render('header.html');

        $battles = self::getAllBattles();




    }

    private static function getAllBattles(){
        
    }
}