const mongoose = require('mongoose')
const { Schema } = mongoose

const questionSchema = Schema({
    option: {
        type: String,
        required: true,
        trim: true
    },
    answer: {
        type: String,
        required: true,
        trim: true
    }
})

const QuestionSchema = mongoose.model('question', questionSchema)
module.exports = QuestionSchema