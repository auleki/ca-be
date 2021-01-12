const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizWinnerSchema = new Schema({
  username: {
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