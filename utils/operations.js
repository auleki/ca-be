const jwt = require('jsonwebtoken')
const config = require('./config')

function createToken (payload) {
  return jwt.sign(payload, config.JWT_SECRET)
}

module.exports = { createToken }
