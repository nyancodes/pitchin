/** Database setup for PitchIn. */

const { Client } = require("pg");
const { DB_URI } = require("../config/index");

const db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
