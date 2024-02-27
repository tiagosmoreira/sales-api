const express = require("express");
const productsController = require("../controllers/products-controllers");

const productRouter = express.Router();

productRouter.get('/', productsController.getAllProducts)

module.exports = productRouter;