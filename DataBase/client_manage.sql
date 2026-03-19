CREATE DATABASE client_manage;

USE client_manage;

CREATE TABLE clients (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 email VARCHAR(255),
 company VARCHAR(255)
);