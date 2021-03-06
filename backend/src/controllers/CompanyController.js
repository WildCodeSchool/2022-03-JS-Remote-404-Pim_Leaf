const models = require("../models");

class CompanyController {
  static browse = (req, res) => {
    models.company
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseSupplierConnected = (req, res) => {
    models.company
      .findUserCompany(parseInt(req.params.id, 10))
      .then(([rows]) => {
        models.company
          .findAllSupplierConnected(rows[0].id)
          .then(([data]) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseSupplierPending = (req, res) => {
    models.company
      .findUserCompany(parseInt(req.params.id, 10))
      .then(([rows]) => {
        models.company
          .findAllSupplierPending(rows[0].id)
          .then(([data]) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseSuppliers = (req, res) => {
    models.company
      .findAllSuppliers()
      .then(([data]) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseRetailerConnected = (req, res) => {
    models.company
      .findUserCompany(parseInt(req.params.id, 10))
      .then(([rows]) => {
        models.company
          .findAllRetailerConnected(rows[0].id)
          .then(([data]) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseRetailerPending = (req, res) => {
    models.company
      .findUserCompany(parseInt(req.params.id, 10))
      .then(([rows]) => {
        models.company
          .findAllRetailerPending(rows[0].id)
          .then(([data]) => {
            res.status(200).json(data);
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static browseRetailers = (req, res) => {
    models.company
      .findAllRetailers()
      .then(([data]) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.company
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static editCompanyInformations = (req, res) => {
    models.company
      .updateCompanyInfo(req.body, parseInt(req.params.id, 10))
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const item = req.body;

    // TODO validations (length, format...)

    models.company
      .insert(item)
      .then(([result]) => {
        res.status(201).send({ ...item, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.company
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = CompanyController;
