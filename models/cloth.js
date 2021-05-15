const mongoose = require('mongoose')

const { Schema } = mongoose

const clothSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  productId: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
  orderLink: {
    type: String
    // required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  sizes: {
    type: [String]
  }
})

const ClothSchema = (module.exports = mongoose.model('cloth', clothSchema))
