DROP DATABASE IF EXISTS trainer_db;
CREATE DATABASE trainer_db;
USE DATABASE trainer_db;
CREATE TABLE trainer (
    id INT NOT NULL AUTO_INCREMENT,
    trainer_name VARCHAR(50) NOT NULL,
    trainer_email VARCHAR(80) NOT NULL,
    (id) PRIMARY KEY
) CREATE TABLE client (
    id INT NOT NULL AUTO_INCREMENT,
    client_name VARCHAR(50) NOT NULL,
    client_email VARCHAR(80) NOT NULL,
    (id) PRIMARY KEY,
    FOREIGN KEY id REFERENCE PRIMARY KEY (id)
)