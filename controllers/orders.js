const orderModel = require("../models/orders");
const mongoose = require("mongoose");
// const axios = require('axios');

exports.viewOrders = async (req, res) => {
  const orders = await orderModel.find({});
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = new orderModel(order);
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
    // mongoose.connect.close()
  } catch (error) {
    res.send(error);
  }
};
