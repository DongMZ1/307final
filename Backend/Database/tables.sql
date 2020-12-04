DROP TABLE IF EXISTS users ;
CREATE TABLE users
(
    UserID INT NOT NULL,
    Username VARCHAR(100) NOT NULL,
    Name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    age INT,
    staff INT DEFAULT 0,
    CONSTRAINT staff CHECK (staff IN (0,1)),
    PRIMARY KEY(Username)
);

INSERT INTO users VALUES (1630081, 'student@mcgill.ca', 'John Watson', 'qwert1203asdfg',30, 1);
INSERT INTO users VALUES (1630082, 'student1@mcgill.ca', 'Jack Watson', 'asdfghj23456',10, 0);

SELECT * FROM users;