const mongoose = require('mongoose');

const { Schema } = mongoose 

const createOrderSchema = new Schema({
  id: {
    type: Number,
    required: true
  }, 
  products: {
    type: [],
    required: true
  },
  discountCode: {
    type: String,
    max: 15
  },
  orderNumber: {
    type: String,
    required: true
  },  
  price: {
    type: Number, 
    required: true
  }, 
  // phone number, email, name
  userInfo: {
    type: {},
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  delivered: {
    type: Boolean,
    default: false
  }  
})

module.exports = createOrderSchema = mongoose.model('order', createOrderSchema)