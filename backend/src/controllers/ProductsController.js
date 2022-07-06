const models = require("../models");

class ProductsController {
  static browse = (req, res) => {
    models.products
      .getProducts(req.params.id)
      .then(([rows]) => {
        res.status(200).json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.products
      .getProductDetails(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.status(200).json(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProductsController;
