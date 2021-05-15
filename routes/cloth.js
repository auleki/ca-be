const router = require('express').Router()
const ClothController = require('../controllers/cloth')
const upload = require('../utils/multer')

router.post('/', ClothController.uploadCloth)
// router.post('/', upload.single('image'), ClothController.uploadCloth)
router.patch('/:id', ClothController.updateCloth)
router.get('/:id', ClothController.findCloth)

module.exports = router

// 0149682663 GTB
