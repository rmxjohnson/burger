DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT, 
  burger_name VARCHAR(45) NOT NULL,
  devoured boolean NOT NULL DEFAULT False,
  PRIMARY KEY (id)
);

--INSERT INTO burgers (burger_name)
--VALUES ("Black Bean Veggie Burger"),("Burger - Mushroom & Onions"),("Bacon Cheeseburger"),("All-American Burger");

--select * from burgers;


