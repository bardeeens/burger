CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int not null auto_increment primary key,
burger_name VARCHAR(40) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT 1
);