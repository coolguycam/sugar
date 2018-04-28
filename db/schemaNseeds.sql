## Schema
DROP DATABASE IF EXISTS sugar_db;
CREATE DATABASE sugar_db;
USE sugar_db;

CREATE TABLE goods
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(55) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);




## Seeds 
INSERT INTO goods (name) VALUES ('White Chocolate Macadamia Nut Cookies');
INSERT INTO goods (name) VALUES ('Apple Pie');
INSERT INTO goods (name, eaten) VALUES ('Peach Cobbler', true);
INSERT INTO goods (name, eaten) VALUES ('Apple Bundt Cake', true);
INSERT INTO goods (name, eaten) VALUES ('Angel Food Cake', true);
INSERT INTO goods (name) VALUES ('Special Brownies');

