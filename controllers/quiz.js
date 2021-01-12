// const quizModel = require('../models/quiz')
const User = require("../models/user")
const mongoose = require('mongoose')
const QuizWinner= require('../models/quizWinner')

//? NO FUNCTIONS TO EXPORT YET 


exports.saveQuizUser = async (req, res) => {
    try {
        const currentUser = req.body
        const newUser = new User(currentUser)
        const savedUser = await newUser.save()
        res.send('User saved')
        // res.send(savedUser)
        mongoose.connect.close()
    } catch (error) {
        res.json({errorMsg: error})
    }
}

exports.saveQuizWinner = async (req, res) => {
    try {
        const currentWinner = req.body
        const newWinner = new QuizWinner(currentWinner)
        const savedWinner = await newWinner.save()
        res.send('Winner Saved')
    } catch (error) {
        res.json({ errorMsg: error })
    }
}

/*
exports.function = async (req, res) => {}
*/