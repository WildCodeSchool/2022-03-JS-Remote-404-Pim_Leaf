const models = require("../models");

class UserController {
  static browse = (req, res) => {
    models.user
      .getProfil(req.body.email)
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
