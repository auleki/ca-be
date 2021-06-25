const Cloth = require('../models/cloth')
const cloudinary = require('cloudinary').v2
const config = require('../utils/config')
const axios = require('axios')

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET
})

exports.fetchClothes = async (req, res) => {
  try {
    const fetchedClothes = await Cloth.find({})
    res.status(200).json(fetchedClothes)
  } catch (error) {
    console.log(error)
  }
}

exports.addCloth = async (req, res) => {
  try {
    // console.table('PAYLOAD', req.body)
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/checkadigs-cloud'
    let imageUrl
    const { image } = req.files
    const { name, price, category, inStock, productId } = req.body
    // console.log('IMAGE FILE:', image)
    await cloudinary.uploader.upload(image, (result, error) => {
      if (error) console.error(error)
      console.log('Upload Complete', result.url)
      imageUrl = result.url
    })

    // console.log('UPLOAD RESPONSE:', imageUrl)
    // const newCloth = { name, category, price, image }
    // console.log(newCloth)
    res.json('Hello Fucktards')
    // res.send('Hitting Upload Route')
  } catch (error) {
    res.json(error)
  }
}

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

exports.deleteCloth = async (req, res) => {
  try {
    const id = req.params.id
    const result = await Cloth.findByIdAndDelete(id)
    // res.json({ data: result, msg: 'cloth deleted' })
    res.json({ msg: 'cloth deleted' })
  } catch (error) {
    res.status(400).json({ msg: 'error occurred while updating cloth', error })
  }
}

exports.updateCloth = async (req, res) => {
  try {
    let id = req.params.id
    let payload = req.body
    let options = {
      upsert: false,
      new: true
    }
    console.log('ID IN REQ: ', id)
    console.log('PAYLOAD: ', payload)
    const result = await Cloth.findByIdAndUpdate(
      id,
      payload,
      options,
      (err, docs) => {
        if (err) console.error(err)
        console.log('Doc Updated', docs)
        res.status(200).send(docs)
      }
    )
  } catch (error) {
    res.status(400).json({ msg: 'error occurred while updating cloth', error })
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
