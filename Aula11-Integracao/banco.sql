CREATE DATABASE lojinha_2024_1;

USE lojinha_2024_1;

CREATE TABLE categoria(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL 
    );
    

CREATE TABLE produto(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL ,
    preco DOUBLE ,
    quantidade DOUBLE ,
    codCategoria INT ,
    FOREIGN KEY (codCategoria) REFERENCES categoria(id)
    );

INSERT INTO categoria VALUES ( 1 , 'Bebidas') , ( 2 , 'Alimentos');
INSERT INTO produto VALUES ( 1 , 'Coca-Cola', 9.89 , 100 , 1 ) ;