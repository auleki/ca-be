const router = require('express').Router()
const AdminController = require('../controllers/admin')

router.get('/', AdminController.hiAdmin)
router.post('/register', AdminController.createAdmin)
router.post('/login', AdminController.login)

module.exports = router
