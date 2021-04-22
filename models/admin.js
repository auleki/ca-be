const mongoose = require('mongoose')
const { Schema } = mongoose

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 5
  },
  scopes: {
    type: [String],
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
})

adminSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('admin', adminSchema)
