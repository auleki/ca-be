const userModel = require("../models/users");
const mongoose = require("mongoose");

exports.saveUser = async (req, res) => {
  // const { email, firstName, lastName, scores } = req.body;
  try {
    const userObject = req.body;
    const UserModel = new userModel(userObject);
    const savedUser = await UserModel.save();
    mongoose.connect.close();
    res.json(savedUser);
  } catch (error) {
      res.send(error)
  }
};
