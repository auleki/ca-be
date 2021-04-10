const router = require('express').Router()

const orderController = require('../controllers/orders')

router.get('/', orderController.viewOrders)

router.post('/', orderController.createOrder)

module.exports = router
