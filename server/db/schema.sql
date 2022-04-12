DROP DATABASE IF EXISTS pitchin_db;

CREATE DATABASE pitchin_db;

\connect pitchin_db


CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password VARCHAR NOT NULL,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE pitches (
  title TEXT,
  description TEXT,
  is_public BOOLEAN DEFAULT true,
  cost DECIMAL DEFAULT 0,
  recipients TEXT,
  username VARCHAR REFERENCES users
);
