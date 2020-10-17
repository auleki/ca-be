const mongoose = require('mongoose');

const { Schema, Model } = mongoose;

const clothSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
})

const ClothSchema = Model('cloth', clothSchema)

module.exports = ClothSchema;