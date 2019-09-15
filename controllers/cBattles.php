<?php

namespace controllers;

class cBattles{
    public static function showAllbattles($f3){
        $f3->set('title', 'Todas las batallas');
        echo \Template::instance()->render('vHeader.html');

        $f3->set('battles', self::getAllBattles());
        echo \Template::instance()->render('vBattles.html');

        echo \View::instance()->render('vFooter.html');
    }

    private static function getAllBattles(){
        return mBattles::getAllBattles();
    }
}