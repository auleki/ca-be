require('dotenv').config()

module.exports = {
  JWT_SECRET: process.env.TOKEN_SECRET,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET
}
