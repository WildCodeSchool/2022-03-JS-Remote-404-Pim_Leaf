const AbstractManager = require("./AbstractManager");

class SupplierManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${SupplierManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${SupplierManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = SupplierManager;
