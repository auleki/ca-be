const router = require('express').Router()
const fs = require('fs')
const clothController = require('../controllers/cloth')

router.get('/', clothController.viewAllClothes)

router.patch('/update/:id', clothController.updateCloth)

router.post('/', clothController.addCloth)

module.exports = router

// router.get('/', (req, res) => {
// res.sendFile(__dirname, 'data.json')
//   const data = JSON.parse(fs.readFileSync('/app.js', 'utf8'))
//   res.send(data)
// })
