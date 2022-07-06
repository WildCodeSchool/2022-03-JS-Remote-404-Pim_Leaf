const models = require("../models");

class UserController {
  static readCompany = (req, res) => {
    models.user
      .getCompanyInfos(req.params.id)
      .then(([rows]) => {
        res.status(200).json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static readUser = (req, res) => {
    models.user
      .getUserInfos(req.params.id)
      .then(([rows]) => {
        res.status(200).json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = UserController;
