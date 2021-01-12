const router = require('express').Router();
const userController = require('../controllers/user');
router.get('/', userController.viewUsers)
router.get('/:username', userController.findUser)
router.post('/', userController.saveUser);

module.exports = router