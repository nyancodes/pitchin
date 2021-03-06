const bcrypt = require("bcrypt");
const db = require("../server/db/index");
const BCRYPT_WORK_FACTOR = 12;

const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../server/expressError");

class User {
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
    console.log(hashedPassword);
    const result = await db.query(
      `INSERT INTO users
           (username,
            password,
            firstName,
            lastName,
            email
            )
           VALUES ($1, $2, $3, $4, $5)
           RETURNING username, firstName, lastName, email`,
      [username, hashedPassword, firstName, lastName, email]
    );

    const user = result.rows[0];

    return user;
  }

  static async authenticate(username, password) {
    // try to find the user first
    const result = await db.query(
      `SELECT     username,
                  password,
                  firstName,
                  lastName,
                  email
           FROM users
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
