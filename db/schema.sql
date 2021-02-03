DROP DATABASE IF EXISTS trainer_db;
CREATE DATABASE trainer_db;
USE DATABASE trainer_db;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(80) NOT NULL,
    is_trainer BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    (id) PRIMARY KEY 
)
