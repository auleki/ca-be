const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
const { createToken } = require('../utils/operations')

exports.createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body
    const adminInfo = { username, password }
    const newAdmin = new Admin(adminInfo)
    const savedAdmin = await newAdmin.save()
    res.status(200).json(savedAdmin)
  } catch (error) {
    res.status(400).json(error)
  }
}

exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username })
    const { username, password, scopes } = admin
    const adminInfo = { username, password, scopes }
    // console.log(adminInfo)
    const token = jwt.sign(adminInfo, 'secretMission')
    res.status(200).json({ token })
  } catch (error) {
    res.json(error)
  }
}

exports.hiAdmin = async (req, res) => {
  try {
    res.send('Hi From Admin')
  } catch (error) {
    res.json(error)
  }
}
