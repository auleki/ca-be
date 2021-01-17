const Subscriber = require('../models/subscribers');
// const mongoose = require('mongoose');

exports.addSubscriber = async (req, res) => {
  try {
    const subscriber = req.body
    const savedSubscriber = await subscriber.save();
    res.send('New Subscriber Added')
  } catch (error) {
    res.send(error)
  } 
}

exports.viewSubscriber = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({})
    res.send(subscribers)
  } catch (error) {
    res.send(error)
  }
}