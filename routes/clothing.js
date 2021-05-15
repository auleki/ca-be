const router = require('express').Router()

const Clothing = require('../controllers/clothing')

router.get('/', Clothing.viewAllClothes)
router.patch('/update/:id', Clothing.updateCloth)
router.post('/', Clothing.addCloth)
module.exports = router
