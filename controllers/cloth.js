const Cloth = require('../models/cloth')
const cloudinary = require('cloudinary').v2
const config = require('../utils/config')

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET
})

exports.uploadCloth = async (req, res) => {
  try {
    const { name, price, category, imageUrl, inStock, productId } = req.body
    const clothing = { name, price, category, imageUrl, inStock, productId }
    console.log('CLOTHING INFO:', clothing)
    const newCloth = new Cloth(clothing)
    const savedCloth = await newCloth.save()
    // const result = await cloudinary.uploader.upload(image.path)
    res.json({ data: savedCloth, msg: 'success' })
  } catch (error) {
    res.json(error)
  }
}

exports.updateCloth = async (req, res) => {
  try {
    // res.json({ msg: 'ABOUT TO UPDATE CLOTHES' })
    let id, payload, options
    id = req.params.id
    // OFLOAD CONTENT OF REQ INTO PAYLOAD OBJ
    // THEN PARSE PRICE TO NUMBER
    payload = req.body
    options = {
      upsert: true
    }
    console.log('ID IN REQ: ', id)
    console.log('REQ BODY: ', payload)
    const updatedCloth = await Cloth.findOneAndUpdate(id, payload, options)
    res.status(200).send(updatedCloth)
  } catch (error) {
    res.status(400).send(error)
  }
}

exports.findCloth = async (req, res) => {
  try {
    let id, foundCloth
    id = req.params.id
    foundCloth = await Cloth.findOne({ productId: id })
    res.json(foundCloth)
  } catch (error) {
    res.status(400).json(error)
  }
}
