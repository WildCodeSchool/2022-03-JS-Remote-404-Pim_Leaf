const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  static table = "company";

  findAll() {
    const sqlQuery = `SELECT * FROM ${CompanyManager.table} `;
    return this.connection.query(sqlQuery);
  }

  findAllSupplier() {
    const sqlQuery = `SELECT * FROM ${CompanyManager.table} 
    INNER JOIN company_group AS g ON ${CompanyManager.table}.group_id=g.id 
    WHERE g.id=2`;
    return this.connection.query(sqlQuery);
  }

  findAllTrader() {
    const sqlQuery = `SELECT * FROM ${CompanyManager.table} 
    INNER JOIN company_group AS g ON ${CompanyManager.table}.group_id=g.id 
    WHERE g.id=1`;
    return this.connection.query(sqlQuery);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${CompanyManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${CompanyManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = CompanyManager;
