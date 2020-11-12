const mongoose = require('mongoose');

const { Schema } = mongoose

const orderSchema = new Schema({
  id: {
    type: Number,
    // required: true
  },
  products: {
    type: [],
    required: true
  },
  discountCode: {
    type: String | null
  },
  orderNumber: {
    type: String,
    required: true
  },
  toalPrice: {
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

const OrderSchema = mongoose.model('order', orderSchema)

module.exports = OrderSchema;