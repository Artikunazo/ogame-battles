<?php

/**
 * @author Artikunazo
 * @version 1.0
 */

namespace controllers;

use models\mBattles;

class cBattles{
    public static function vShowAllBattles($f3){
        $f3->set('title', 'Todas las batallas');
        echo \Template::instance()->render('vHeader.html');

        $allBattles = self::getAllBattles();
        $battlesConverted = [];

        for($i = 0; $i < count($allBattles); $i++){
            $battlesConverted[$i] = [
                $battle['banner'] = $allBattles[$i]['banner'],
                $battle['summary'] = base64_decode($allBattles[$i]['summary'])
            ];
        }

        $f3->set('battles', $battlesConverted);
        echo \Template::instance()->render('vBattles.html');

        echo \View::instance()->render('vFooter.html');
    }

    private static function getAllBattles(){
        return mBattles::getAllBattles();
    }

    public static function vAddNewBattle($f3){
        $f3->set('title', 'Agregar batalla');
        echo \Template::instance()->render('vHeader.html');

        echo \View::instance()->render('vAddBattle.html');

        echo \View::instance()->render('vFooter.html');
    }

    public static function addNewBattle($f3){
        $object = file_get_contents('php://input');

        if(self::registerNewBattle($object) == 1)
            $response = 'Nice';
         else 
            $response = 'Nel';

        exit(
            json_encode(
                [
                    'response' => $response
                ]
            )
        );
    }

    private static function registerNewBattle($object){
        $data = json_decode($object, true);

        return mBattles::addNewBattle($data);
    }
}