const router = require('express').Router();

router.get("/", (req, res) => res.send('Product Home Page'));

module.exports = router;