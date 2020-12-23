const router = require('express').Router();
const userController = require('../controllers/user');
router.get('/', userController.viewUsers)
router.post('/', userController.saveUser);
router.get('/:username', userController.findUser)

module.exports = router