const Subscriber = require('../models/subscribers');
// const mongoose = require('mongoose');

exports.addSubscriber = async (req, res) => {
  try {
    let subscriberInfo;
    
    console.log("Request Recieved")

    if (req.body.source === 'homepageForm') {  
      subscriberInfo = {
        email: req.body.email,
        source: req.body.source,
      }
    } else {
      const { firstName, lastName, email, source } = req.body
      subscriberInfo = { firstName, lastName, source, email }
    }
    // res.json({ msg: "Subscriber from somewhere else", data: req.body })
    // console.log(subscriberInfo)
    const newSubscriber = new Subscriber(subscriberInfo)
    const savedSubscriber = await newSubscriber.save()
    res.json({ msg: "Saving Subscriber", data: savedSubscriber})
  } catch (error) {
    res.json(error)
  } 
}

exports.viewSubscriber = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({})
    res.json(subscribers)
  } catch (error) {
    res.json(error)
  }
}