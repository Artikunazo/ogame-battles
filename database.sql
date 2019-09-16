create database artikuna_ogame;

use artikuna_ogame;

create table if not exists battles(
    id int auto_increment primary key,
    banner varchar(100),
    summary_battle text,
    date_battle datetime default now()
);