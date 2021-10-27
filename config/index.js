// const dotenv = require("dotenv");
// dotenv.config();
// // Single source to handle all the env vars
// module.exports = {
//   host: process.env.PGHOST,
//   user: process.env.PGUSER,
//   database: process.env.PGDATABASE,
//   port: process.env.PGPORT,
//   databaseUri: process.env.DATABASE_URL || process.env.devDatabaseUri,
// };

// "use strict";

// /** Shared config for application; can be required many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "dev-secret-key";

const PORT = +process.env.PORT || 3001;
const DB_URI =
  process.env.NODE_ENV === "test"
    ? 'postgresql:///"pitchin_test"'
    : "postgresql:///pitchin_db";

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("SECRET_KEY:", SECRET_KEY);
console.log("PORT:", PORT.toString());
console.log("BCRYPT_WORK_FACTOR", BCRYPT_WORK_FACTOR);
console.log("Database:", DB_URI);
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  DB_URI,
};
