const router = require('express').Router();
const clothController = require('../controllers/cloth');


router.get("/", clothController.viewAllClothes);

module.exports = router;