const express = require('express')
const router = express.Router()

const {addNewProduct,fetchProductsByQuery} = require("../controllers/productController")

router.post("/new_product",addNewProduct)
router.get("/search",fetchProductsByQuery)

module.exports = router