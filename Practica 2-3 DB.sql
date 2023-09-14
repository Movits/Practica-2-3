CREATE DATABASE `Practica 2-3`;
USE `Practica 2-3`;

CREATE TABLE usuarios (
    dni INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    edad INT,
    pais VARCHAR(255)
);

DESCRIBE usuarios;