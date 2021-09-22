DROP DATABASE IF EXISTS pitchin_db;

CREATE DATABASE pitchin_db;

\connect pitchin_db


CREATE TABLE "user" (
  username VARCHAR(25) PRIMARY KEY,
  password VARCHAR(25) NOT NULL,
  first_name VARCHAR(25) NOT NULL,
  last_name VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE pitch (
  title TEXT,
  description TEXT,
  is_public BOOLEAN DEFAULT true,
  cost DECIMAL DEFAULT 0,
  recipients TEXT,
  username INTEGER REFERENCES "user"
);