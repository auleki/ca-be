const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizWinnerSchema = new Schema({
  username: {
    type: String,
    required: true,
    scores: []
  }
})

const QuizWinnerSchema = mongoose.model('quiz-winner', quizWinnerSchema)
module.exports = QuizWinnerSchema;