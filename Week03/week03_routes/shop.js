const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");
const adminController = require("../week03_controllers/admin.js");
const shopController = require("../week03_controllers/shop.js");

router.get("/", shopController.getProducts);
router.get("/products", shopController.getIndex);
router.get("/products/:id", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders);

module.exports = router;