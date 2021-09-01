const bcrypt = require('bcrypt');

class User {
  getUsers()  {
    const results = {};
    SQL_QUERY=`SELECT * FROM users;`;

    // query db


    // return results
    return results;
  }

  setPassword(myPlaintextPassword, saltRounds=10) {
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
    });
  }
  
  checkUser(username, password) {
    //... fetch user from a db etc.

    // approach 1
    //const match = await bcrypt.compare(password, user.passwordHash);

    // if(match) {
    //     //login
    // }

    // approach 2
    // Load hash from your password DB.
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
      // result == true
    });

  }

}
module.exports = User;