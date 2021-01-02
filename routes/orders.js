const router = require('express').Router();
const orderController = require('../controllers/orders');


router.get('/', orderController.viewOrders);

router.post('/', orderController.createOrder);

module.exports = router;

// afternoon-chamber-08446
// mongodb+srv://dev_admin:testing_dev00@e-commerce.t7peg.mongodb.net/clothes?retryWrites=true&w=majority

// NODE_ENV - production