const express = require('express')
const router = express.Router()

const {addNewProduct} = require("../controllers/productController")

router.post("/new_product",addNewProduct)

module.exports = router