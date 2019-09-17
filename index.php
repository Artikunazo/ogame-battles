<?php

// Kickstart the framework
$f3=require('lib/base.php');

$f3->set('DEBUG',1);
if ((float)PCRE_VERSION<7.9)
	trigger_error('PCRE version is out of date');


if($f3->get('DEBUG') > 0){
	$f3->set('base_route', 'http://' . $f3->get('HOST') . $f3->get('PORT') . '/');
} else {
	$f3->set('base_route', 'http://' . $f3->get('HOST') . '/battles-ogame/');
}
// Load configuration
$f3->config('config.ini');

$f3->route('GET /', 'controllers\cBattles::showAllBattles');
$f3->rpute('GET /add-battle', 'controllers\cBattles::addNewBattle');

$f3->run();
