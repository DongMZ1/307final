CREATE TABLE users
(
    student_id INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    passcode VARCHAR(100) NOT NULL,
    PRIMARY KEY(student_id)
);

INSERT INTO users VALUES (1630081, 'llorman0@baidu.com', 'abc123');