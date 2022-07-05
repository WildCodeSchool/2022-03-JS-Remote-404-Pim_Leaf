const AbstractManager = require("./AbstractManager");

class ClientsManager extends AbstractManager {
  static table = "item";

  insert(item) {
    return this.connection.query(
      `insert into ${ClientsManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ClientsManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ClientsManager;
