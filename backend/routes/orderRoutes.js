const express = require('express')
const router = express.Router()
const {
    createOrder,
    getMyOrders

} = require("../controllers/orderController")
const { authorization } = require('../middleware/authMiddleware')

router.post('/new_order',authorization, createOrder)
router.get('/my_orders', authorization, getMyOrders)


module.exports = router
