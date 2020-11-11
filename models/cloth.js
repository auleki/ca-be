const mongoose = require('mongoose');

const { Schema } = mongoose;

const clothSchema = new Schema({
  name: {
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
  orderLink: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
})

const ClothSchema = mongoose.model('cloth', clothSchema);

module.exports = ClothSchema;