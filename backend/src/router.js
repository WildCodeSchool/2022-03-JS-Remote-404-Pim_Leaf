const express = require("express");

const {
  ItemController,
  ProductsController,
  CompanyController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/products", ProductsController.browse);
router.get("/products/:id", ProductsController.read);

router.get("/company", CompanyController.browse);
router.get("/company/:id", CompanyController.read);
router.get("/company-supplier", CompanyController.browseSupplier);
router.get("/company-trader", CompanyController.browseTrader);

module.exports = router;
