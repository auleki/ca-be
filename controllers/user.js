const UserModel = require("../models/user");
const ClothingModel = require("../models/clothSection")
// const mongoose = require("mongoose");

exports.saveUser = async (req, res) => {
  // const { email, firstName, lastName, scores } = req.body;
  try {
    const newUser = new UserModel({
      username: "jai@giwa.com",
      firstName: "Marion",
      lastName: "Lerwin",
      scores: [10, 40, 49]
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
        const currentUser = await UserModel.findOne({ 
          email: username
        })
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