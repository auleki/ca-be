// const quizModel = require('../models/quiz')
const User = require("../models/user")
const mongoose = require('mongoose')

//ANCHOR FUNCTIONS

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

exports.showUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}

exports.findQuizUser = async (req, res) => {
    try {
        const user = await req.params.username
        const foundUser = await User.findOne({ username: user })
        res.json(foundUser)
    } catch (error) {
        res.json(error)
    }
}

/*
exports.function = async (req, res) => {}
*/