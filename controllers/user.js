const UserModel = require("../models/user");
// const ClothingModel = require("../models/clothSection")
// const mongoose = require("mongoose");

exports.saveUser = async (req, res) => {
  const { username, email, firstName, lastName, scores } = req.body;
  try {
    const newUser = new UserModel({
      username,
      firstName,
      lastName,
      email,
      scores
    })
    const savedUser = await newUser.save()
    res.json(savedUser)
  } 
  catch (error) {
      res.send(error)
  }
};

exports.findUser = async (req, res) => {
    try {
        const { username } = req.params
        console.log("USERNAME:", username)
        const currentUser = await UserModel.findOne({ username })
        // console.log(currentUser)
        res.json(currentUser)
    } catch (error) {
        res.send(error)
    }
}

exports.viewUsers = async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.send(users)
  } catch (error) {
    res.json(error)
  }
}

exports.updateUserScores = async (req, res) => {
  try {
    const username = req.params.username
    // const foundUser = await UserModel.findOne({ username })
    const foundUser = await UserModel.findByIdAndUpdate({ email })
    // console.table('User Viewing')
    // console.table(foundUser)
    // const updatedScores = { scores: req.body.scores }
    // foundUser.scores.push(req.body.scores)

    // const updatedScore = await UserModel.save()
    console.log('updated scores:', updatedScore)
    // const showNew = { new: true }
    res.json(foundUser)
  } catch (error) { 
    res.json(error)
  }
}