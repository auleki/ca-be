const mongoose = require('mongoose');

const { Schema, Model } = mongoose;

const clothSectionSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  products: {
    type: Array, 
    required: true
  },
})

module.exports = ClothSectionSchema = Model('clothSection', clothSectionSchema);