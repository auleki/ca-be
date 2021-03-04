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
  username: {
    type: String, 
    required: true,
  },
  totalWins: {
    type: Number,
    default: 1,
    required: true
},
  wonAt: {
    type: Date,
    default: Date.now()
  }
})

const QuizWinnerSchema = mongoose.model('quiz-winner', quizWinnerSchema)
module.exports = QuizWinnerSchema;