const userModel = require("../models/user");
const mongoose = require("mongoose");

exports.saveUser = async (req, res) => {
  // const { email, firstName, lastName, scores } = req.body;
  try {
    const { username, firstName, lastName, score } = req.body
    const userObject = {
      username,
      firstName, 
      lastName,
      score
    }
    console.log(userObject)
    const User = new userModel(userObject);
    const savedUser = await User.save();
    res.send('User has been saved');
    // mongoose.connect.close();
  } catch (error) {
      res.send(error)
  }
};

exports.findUser = async (req, res) => {
    try {
        const { username } = req.params
        const currentUser = userModel.findOne({ email: username })
        res.send(currentUser)
    } catch (error) {
        res.send(error)
    }
}

exports.viewUsers = async (req, res) => {
  res.json({ msg: "BOOYA!" })
}