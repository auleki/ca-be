const mongoose = require('mongoose')
const { Schema } = mongoose

// This is so a quiz session can be saved. 

const quizModel = Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    currentScore: {
        type: Number,
        required: true
    }
})

const QuizModel = mongoose.model('quiz', quizModel)
exports.module = QuizModel