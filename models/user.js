const mongoose = require('mongoose')
const { Schema } = mongoose 

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    scores: {
        type: []
    }
})

const UserSchema = mongoose.model('user', userSchema);
module.export = UserSchema;