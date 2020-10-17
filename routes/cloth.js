const router = require('express').Router();
const clothController = require('../controllers/cloth');


router.get("/", clothController.viewAllClothes);

router.post("/", clothController.addCloth);

module.exports = router;