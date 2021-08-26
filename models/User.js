class User {
  getUsers()  {
    const results = {};
    SQL_QUERY=`SELECT * FROM users;`;

    // query db


    // return results
    return results;
  }

}
module.exports = User;