const router = require('express').Router();
const userController = require('../controllers/users');

// for now user activity only happens in  quiz route
router.post('/', userController.saveUser);


module.exports = router