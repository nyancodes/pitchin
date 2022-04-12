\connect pitchin_db

INSERT INTO users (username, password, firstName, lastName, email)
VALUES ('nyan',
        'passwordpassword',
        'Nyan',
        'Htet',
        'nyan@testuser.com');



INSERT INTO pitches (title, description, cost, username)
VALUES ('drone', 'dji drone', 500,'nyan')