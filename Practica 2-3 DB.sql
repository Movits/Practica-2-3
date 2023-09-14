SHOW DATABASES;
CREATE DATABASE `Practica 2-3`;
USE `Practica 2-3`;

SHOW TABLES;
CREATE TABLE usuarios (
    dni INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    edad INT,
    pais VARCHAR(255)
);

DESCRIBE usuarios;
SELECT * FROM usuarios;

ALTER TABLE usuarios CHANGE dni id_usuario INT AUTO_INCREMENT;

/* SELECT * FROM usuarios WHERE id_usuario = your_id_value_here; */
SELECT * FROM usuarios WHERE id_usuario = 1;

UPDATE usuarios 
SET email = 'a@gmail.com', nombre = 'a', edad = 1, pais = 'Argentina'
WHERE id_usuario = 1;

UPDATE usuarios 
SET email = 'z@gmail.com', nombre = 'z', edad = 26, pais = 'Zimbabue'
WHERE id_usuario = 6;

DELETE FROM usuarios WHERE id_usuario = 4;

DELETE FROM usuarios WHERE id_usuario = 5;

