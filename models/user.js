const mongoose = require('mongoose')
const { Schema } = mongoose 

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastPlayed: {
        type: Date,
        default: Date.now
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


module.exports = mongoose.model('user', userSchema);
/*

{   
    "username": ,
    "firstName":,
    "lastName": 
}

*/