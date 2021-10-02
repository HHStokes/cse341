const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require("../week03_controllers/admin.js");

router.get("/add-product", adminController.getAddProduct);
router.get("/products", adminController.getProducts);
router.post("/product", adminController.postAddProduct);

module.exports = router; 