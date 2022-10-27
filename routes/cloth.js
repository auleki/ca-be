const router = require('express').Router()
const ClothController = require('../controllers/cloth')
const upload = require('../utils/multer')

router.get('/', ClothController.fetchClothes)
router.post('/', ClothController.uploadCloth)
router.post('/upload', ClothController.addCloth)
router.get('/populate', ClothController.populateDb)
router.patch('/:id', ClothController.updateCloth)
router.get('/:id', ClothController.findCloth)
router.delete('/:id', ClothController.deleteCloth)

module.exports = router
