const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "user";

  findOneByEmail(mail) {
    return this.connection
      .query(`SELECT * FROM ${UsersManager.table} WHERE mail = ?`, [mail])
      .then((res) => res[0]);
  }

  findCompanyUser(id) {
    return this.connection
      .query(
        `SELECT user.mail, company.company_group_id FROM ${UsersManager.table}
      LEFT JOIN company 
      ON company.user_id = user.id
      WHERE user_id = ?`,
        [id]
      )
      .then((res) => res[0]);
  }
}

module.exports = UsersManager;
