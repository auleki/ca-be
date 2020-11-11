const mongoose = require('mongoose');

const { Schema } = mongoose;

const clothSectionSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  products: {
    type: [], 
    required: true
  },
})

module.exports = ClothSectionSchema = mongoose.model('clothSection', clothSectionSchema);