const bcrypt = require("bcrypt");

const BCRYPT_WORK_FACTOR = 12;

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

class User {
  // getUsers() {
  //   const results = {};
  //   SQL_QUERY = `SELECT * FROM users;`;

  //   // query db

  //   // return results
  //   return results;
  // }

  // setPassword(myPlaintextPassword, saltRounds = 10) {
  //   bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  //     // Store hash in your password DB.
  //   });
  // }

  // checkUser(username, password) {
  //   //... fetch user from a db etc.

  //   // approach 1
  //   //const match = await bcrypt.compare(password, user.passwordHash);

  //   // if(match) {
  //   //     //login
  //   // }

  //   // approach 2
  //   // Load hash from your password DB.
  //   bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  //     // result == true
  //   });
  // }

  static async getUsers() {
    const result = await db.query(
      `SELECT username,
      firstName,
      lastName,
      email,
      FROM user
      ORDER BY username`
    );
    return result.rows;
  }

  static async register({ username, password, firstName, lastName, email }) {
    const duplicateCheck = await db.query(
      `SELECT username
           FROM users
           WHERE username = $1`,
      [username]
    );

    if (duplicateCheck.rows[0]) {
      throw new BadRequestError(`Duplicate username: ${username}`);
    }

    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
           (username,
            password,
            first_name,
            last_name,
            email,
            is_admin)
           VALUES ($1, $2, $3, $4, $5, $6)
           RETURNING username, "firstName, lastName, email"`,
      [username, hashedPassword, firstName, lastName, email]
    );

    const user = result.rows[0];

    return user;
  }

  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
      `SELECT username,
                  password,
                  first_name,
                  last_name,
                  email
           FROM user
           WHERE username = $1`,
      [username]
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(password, user.password);
      if (isValid === true) {
        delete user.password;
        return user;
      }
    }

    throw new UnauthorizedError("Invalid username/password");
  }
}

module.exports = User;
