const dotenv = require('dotenv');
dotenv.config();
// Single source to handle all the env vars
module.exports = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    databaseUri: process.env.DATABASE_URL || process.env.devDatabaseUri,
};