const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  findAll(query) {
    let sqlQuery = `SELECT * FROM ${ProductsManager.table}
     INNER JOIN category AS c ON c.id=${ProductsManager.table}.category_id `;
    const sqlValue = [];
    if (query.name) {
      sqlQuery += "WHERE product_name LIKE ?";
      sqlValue.push(`%${query.name}%`);
    }
    return this.connection.query(sqlQuery, sqlValue);
  }

  insert(item) {
    return this.connection.query(
      `insert into ${ProductsManager.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${ProductsManager.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ProductsManager;
