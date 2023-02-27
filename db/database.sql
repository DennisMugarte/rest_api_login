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

    DROP TABLE pastel_Grande;

///////////////Ejemplo//////////////////////////////

    SELECT 1+1;
    SELECT 1+1 AS nombre;

    CREATE TABLE pastel_Grande (
        id INT(11) NOT NULL AUTO_INCREMENT,
        nombre VARCHAR(45) DEFAULT NULL,
        sabor VARCHAR(50) DEFAULT NULL,
        dibujo VARCHAR(50),
        color VARCHAR(50),
        especial VARCHAR(50),
        precio INT(15) DEFAULT NULL,
        tamano VARCHAR(50) DEFAULT NULL,
        forma VARCHAR(50) DEFAULT NULL,
        galleta_o_pan VARCHAR(50) DEFAULT NULL,
        PRIMARY KEY (id)
    );

    SELECT * FROM pastel_Grande;

    INSERT INTO pastel_Grande VALUES
    (1, 'Dennis','Chocolate y tres leches', 'Dibujo de Kimetsu no Yaiba', 'Azul', 'Queso de bola encima del pastel', 470, 'Grande', 'Cuadrado', 'Galleta aviones'),
    (2, 'Diego','Tres leches', 'Dibujo de Pochita', 'Rojo', '', 250, 'Mediano', 'Circulo', 'Pan'),
    (3, 'Keren','Chocolate', 'Dibujo de Frozen', 'Azul', 'Chocolate', 150, 'Chico', 'Cuadrado', 'Pan'),
    (4, 'Emili','Galleta oreo', 'Dibujo de Gatitos', 'Morado', 'Queso de bola encima del pastel',400, 'Grande', 'Cuadrado', 'Galleta aviones');
    

    //Buscar un dato en la TABLA
        SELECT * FROM pastel_Grande WHERE id = 1;
    //Eliminar un dato en la TABLA 
        DELETE * FROM pastel_Grande WHERE id = 5;