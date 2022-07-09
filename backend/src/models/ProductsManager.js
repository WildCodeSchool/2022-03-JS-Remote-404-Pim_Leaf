const AbstractManager = require("./AbstractManager");

class ProductsManager extends AbstractManager {
  static table = "products";

  findAll(query) {
    let sqlQuery = `
    SELECT
    p.id,
    p.product_name,
    c.company_name supplier,
    s.supplier_id,
    s.quantity,
    cat.name category
    FROM ${ProductsManager.table} AS p
    LEFT JOIN stock AS s ON s.product_id = p.id
    LEFT JOIN company AS c ON s.supplier_id = c.id
    LEFT JOIN category AS cat ON p.category_id = cat.id
    `;

    const sqlValue = [];
    if (query.name) {
      sqlQuery += "WHERE product_name LIKE ?";
      sqlValue.push(`%${query.name}%`);
    }
    return this.connection.query(sqlQuery, sqlValue);
  }

  getProducts(id) {
    return this.connection.query(
      `SELECT
      p.id,
      p.product_name,
      c.company_name AS owner,
      comp.company_name AS supplier,
      cat.name,
      s.disponibility
      FROM ${ProductsManager.table} AS p
      LEFT JOIN stock AS s ON s.product_id = p.id
      LEFT JOIN company AS c ON s.owner_id = c.id
      LEFT JOIN company AS comp ON s.supplier_id = comp.id 
      LEFT JOIN category AS cat ON cat.id = p.category_id
      LEFT JOIN user AS u ON c.user_id = u.id
      WHERE u.id=?
      `,
      [id]
    );
  }

  getProductDetails(id) {
    return this.connection.query(
      `SELECT
    p.id AS product_id,
    p.product_name,
    p.detail AS product_details,
    p.advise AS product_advise,
    cat.name AS category,
    o.country,
    o.region
    FROM ${ProductsManager.table} AS p
    INNER JOIN category AS cat ON p.category_id = cat.id
    INNER JOIN origin AS o ON p.origin_id = o.id
    WHERE p.id = ?`,
      [id]
    );
  }

  getProductAllergens(id) {
    return this.connection.query(
      `SELECT 
      a.id,
      a.name AS allergen
      FROM ${ProductsManager.table} AS p
      LEFT JOIN allergens_types AS aty ON aty.product_id=p.id
      LEFT JOIN allergen_category AS a ON a.id=aty.allergen_id
      WHERE p.id = ?
    `,
      [id]
    );
  }

  getProductLabels(id) {
    return this.connection.query(
      `SELECT 
      l.id,
      l.name AS label_name
      FROM ${ProductsManager.table} AS p
      LEFT JOIN labels_types AS lty ON lty.product_id=p.id
      LEFT JOIN label AS l ON lty.label_id=l.id
      WHERE p.id = ?
      `,
      [id]
    );
  }
}

module.exports = ProductsManager;
