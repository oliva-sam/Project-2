DROP DATABASE IF EXISTS trainer_db;
CREATE DATABASE trainer_db;
USE trainer_db;
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL,
    is_trainer BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
-- Inserting values into sample database --
INSERT INTO user (name, email, is_trainer)
VALUES ('Xavier', 'xavi@fakemail.com', true);
INSERT INTO user (name, email, is_trainer)
VALUES ('Bob', 'bob@fakemail.com', false);
INSERT INTO user (name, email, is_trainer)
VALUES ('Jon', 'jon@fakemail.com', false);
INSERT INTO user (name, email, is_trainer)
VALUES ('Jane', 'jane@fakemail.com', true);
-- Selecting wherer trainer is true or false with boolean defaulted to false --
SELECT * FROM trainer_db.user WHERE user.is_trainer = 1;
SELECT * FROM trainer_db.user WHERE user.is_trainer = 0;