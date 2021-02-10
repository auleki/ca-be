const Subscriber = require('../models/subscribers');
// const mongoose = require('mongoose');

exports.addSubscriber = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body
    const newSubscriber = {
      firstName, 
      lastName, 
      email
    }
    const savedSubscriber = await newSubscriber.save();
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