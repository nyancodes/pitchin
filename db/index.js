const { Client } = require('pg');
const { databaseUri, host, user, database, port } = require('../config');

const db = new Client({
  connectionString: databaseUri
});


async function test() {
    try {
        db.connect();
        console.log(databaseUri);
        const res = await db.query('SELECT * FROM user');
        console.log(res);
        await db.end();
    } catch(error) {
        console.log(error);
    }
}

test();

module.exports = db;