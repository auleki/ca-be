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




// {
//   "id": 909,
//   "products": [
//     { productName: "Cashmere", price: 15000 },
//     { productName: "Cashmere", price: 1000 },
//     { productName: "Cashmere", price: 500 },
//     { productName: "Cashmere", price: 1300 },
//     { productName: "Cashmere", price: 600 },
//     { productName: "Cashmere", price: 800 },
//   ],
//   "discountCode": "XMAS-59",
//   "orderNumber": "1X3927491GH0",
//   "totalPrice": 35000,
//   "userInfo": {
//     name: "James Harden",
//     city: "Houston, TX",
//     email: "valder@gmail.com"
//   }
// }