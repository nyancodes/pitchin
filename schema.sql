DROP DATABASE IF EXISTS pitchin_db;

CREATE DATABASE pitchin_db;

\connect pitchin_db


CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT
);

CREATE TABLE pitch (
  title TEXT,
  description TEXT,
  is_public BOOLEAN DEFAULT true,
  cost DECIMAL DEFAULT 0,
  recipients TEXT,
  user_id INTEGER REFERENCES "user"
);