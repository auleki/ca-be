const orderModel = require('../models/orders');
const mongoose = require('mongoose');
// const axios = require('axios');



exports.createOrder = async (req, res) => {
  try {
    const order = req.body
    const newOrder = new orderModel(order)
    const savedOrder = await newOrder.save()
    mongoose.connect.close()
    res.send(savedOrder)
  } catch (error) {
    res.send(error)
  }
}

