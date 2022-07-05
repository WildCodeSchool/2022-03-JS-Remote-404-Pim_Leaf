const express = require("express");
const { checkData } = require("./middleware/auth");

const {
  ItemController,
  AuthController,
  ProductsController,
  CompanyController,
  RetailerController,
  SupplierController,
  ClientsController,
  UserController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/products", ProductsController.browse);
router.get("/products/:id", ProductsController.read);
router.get("/company/:id", CompanyController.read);
router.get("/retailer", RetailerController.browse);
router.get("/supplier", SupplierController.browse);
router.get("/clients", ClientsController.browse);
router.get("/profil", UserController.browse);

router.post("/login", checkData, AuthController.login);

module.exports = router;
