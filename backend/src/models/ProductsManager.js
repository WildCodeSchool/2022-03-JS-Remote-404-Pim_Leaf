const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  findAll(query) {
    let sqlQuery = `
    SELECT
    p.id product_ID,
    product_name,
    c.company_name,
    s.product_id,
    s.company_id,
    s.quantity,
    cat.name category
    FROM ${ProductsManager.table} AS p
    LEFT JOIN stock AS s
    ON s.product_id = p.id
    LEFT JOIN company AS c
    ON s.company_id = c.id
    LEFT JOIN category AS cat
    ON p.category_id = cat.id
    LEFT JOIN company_group AS g
    ON c.group_id = g.id
    WHERE s.company_id = 4 OR s.company_id = 5
    `;

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
