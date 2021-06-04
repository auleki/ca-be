// cSModel - Cloth Section Model
const clothSectionModel = require('../models/clothSection')
const clothModel = require('../models/cloth')
const mongoose = require('mongoose')


exports.viewAllClothes = async (req, res) => {
  // const dbUrl = 'http://localhost:5000/clothing'
  try {
    const data = await clothModel.find({})
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}

exports.addCloth = async (req, res) => {
  try {
    // const cloth = req.body.cloth
    const savedImage = await cloudinary.uploader.upload(
      cloth.image,
      (err, image) => console.console.log(err, image)
    )

    const newCloth = {
      name: 'Eclairs Chocolate',
      category: 'Sweatshirt',
      price: 4000,
      // MAKE SURE TO CHECK IF FILE IS OF AN IMAGE TYPE
      // IF NOT RETURN ERROR
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/indian-central-industrial-security-force-and-airport-news-photo-1598457317.jpg?crop=0.994xw:0.906xh;0,0&resize=1200:*'
    }
    const savedCloth = await newCloth.save()
    console.log('VALUE OF UNDEFINED:', savedCloth)
    // mongoose.connection.close()
    res.send(savedCloth)
  } catch (error) {
    res.send(error)
  }
}

exports.updateCloth = async (req, res) => {
  try {
    const id = req.params.id
    const data = req.body
    // const fetchedCloth = await clothSectionModel.findOneAndUpdate(
    //   { id },
    //   { $set: updateData },
    //   { new: true }
    // )
    const fetchedCloth = await clothSectionModel.findOne({ id })
    console.log('ID:', id)
    // console.log(fetched)
    res.json({ msg: fetchedCloth })
  } catch (error) {
    res.json(error)
  }
}
