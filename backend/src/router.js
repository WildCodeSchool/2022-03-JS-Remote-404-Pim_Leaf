const express = require("express");
const { checkData } = require("./middleware/auth");

const {
  AuthController,
  ProductsController,
  CompanyController,
  // SupplierController,
  UserController,
} = require("./controllers");

const router = express.Router();

router.post("/login", checkData, AuthController.login);

router.get("/user/:id/products", ProductsController.browse);
router.get("/products/:id", ProductsController.read);
// router.get("/products/:id/supplier", SupplierController.read);
// router.get("/products/:id/company", CompanyController.read);

router.get("/retailer/suppliers", CompanyController.browse);
router.get("/supplier/clients", CompanyController.browse);
router.get("/retailer/suppliers/:id", CompanyController.browse);
router.get("/supplier/clients/:id", CompanyController.browse);

router.get("/company/:id", UserController.readCompany);
router.get("/user/:id", UserController.readUser);

module.exports = router;
