const express = require('express')
const router = express.Router()
const {
    createOrder,
    getMyOrders

} = require("../controllers/orderController")
const { authorization } = require('../middleware/authMiddleware')

router.post('/',authorization, createOrder)
router.get('/me', authorization, getMyOrders)


module.exports = router
