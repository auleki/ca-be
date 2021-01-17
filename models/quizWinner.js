const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizWinnerSchema = new Schema({
  firstName: {
    type: String, 
    required: true
  },
  lastName: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    scores: []
  },
  wonAt: {
    type: Date,
    default: Date.now()
  }
})

const QuizWinnerSchema = mongoose.model('quiz-winner', quizWinnerSchema)
module.exports = QuizWinnerSchema;