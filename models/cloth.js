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
  imageUrls: {
    type: [String],
    required: true
  },
  color: {
    type: String
  },
  sizes: {
    type: []
  }
})

clothSchema.set('toJSON', {
  transform: (doc, returnedObject) => {
    // returnedObject.productId = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const ClothSchema = (module.exports = mongoose.model('cloth', clothSchema))
