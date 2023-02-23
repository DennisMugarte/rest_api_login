CREATE DATABASE IF NOT EXISTS pasteldb;
    use pasteldb;

    CREATE TABLE pastel_Grande (
        id INT(11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(45) DEFAULT NULL,
        sabores VARCHAR(50),
        precios VARCHAR(50),
        tamaño VARCHAR(50),
        material VARCHAR(50),
        PRIMARY KEY (id)
    );