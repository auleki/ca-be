require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
// const multer = require('multer')
// Middlewares
app.use(cors())
app.use(express.json())
// app.use(urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cookieParser())
// app.use(fileUpload())

// Imports
const clothingRouter = require('./routes/clothing')
const orderRouter = require('./routes/orders')
const userRouter = require('./routes/user')
const subscribeRouter = require('./routes/subscribers')
const quizRouter = require('./routes/quiz')
const adminRouter = require('./routes/admin')
const clothRouter = require('./routes/cloth')
const { urlencoded } = require('express')

const DB_URL = process.env.MONGODB_URL

const mOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(DB_URL, mOptions, err => {
  err ? console.log('error while connecting', err) : console.log('DB Connected')
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
//Base URL
const baseUrl = '/api'

app.use(`${baseUrl}/clothing`, clothingRouter)
app.use(`${baseUrl}/cloth`, clothRouter)
app.use(`${baseUrl}/orders`, orderRouter)
app.use(`${baseUrl}/users`, userRouter)
app.use(`${baseUrl}/quiz`, quizRouter)
app.use(`${baseUrl}/subscribers`, subscribeRouter)
app.use(`${baseUrl}/admin`, adminRouter)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server up @ http://localhost:${PORT}`))
