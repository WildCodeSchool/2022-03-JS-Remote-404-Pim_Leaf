const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  findOneByEmail(email) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE mail = ?`, [email])
      .then((res) => res[0]);
  }
}

module.exports = UsersManager;
