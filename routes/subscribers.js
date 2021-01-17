const router = require('express').Router();
const subscriberController = require('../controllers/subscribers')

router.get('/', subscriberController.viewSubscriber);
router.post('/', subscriberController.addSubscriber);

module.exports = router;