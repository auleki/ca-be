const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriberSchema = new Schema({
  firstName: {
    type: String,
    // required: true,
    trim: true,
  },
  lastName: {
    type: String,
    // required: true,
    trim: true,
  },
  source: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
})

const SubscriberSchema = mongoose.model('subscriber', subscriberSchema);

module.exports = SubscriberSchema;