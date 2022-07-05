const AbstractManager = require("./AbstractManager");

class RetailerManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${RetailerManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${RetailerManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = RetailerManager;
