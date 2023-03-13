const express = require('express')
const router = express.Router()

const {addNewProduct,fetchProductsByQuery,
       fetchProductsByUserInput,deleteProduct} 
       = require("../controllers/productController")

router.post("/new_product",addNewProduct)
router.get("/search",fetchProductsByQuery)
router.get(`/search_by_input`,fetchProductsByUserInput)

module.exports = router