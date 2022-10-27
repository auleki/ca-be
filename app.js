require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
// const multer = require('multer')
// Middlewares
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

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
const versioning = '/api/v1'

app.use(`${versioning}/clothing`, clothingRouter)
app.use(`${versioning}/cloth`, clothRouter)
app.use(`${versioning}/orders`, orderRouter)
app.use(`${versioning}/users`, userRouter)
app.use(`${versioning}/quiz`, quizRouter)
app.use(`${versioning}/subscribers`, subscribeRouter)
app.use(`${versioning}/admin`, adminRouter)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server up @ http://localhost:${PORT}`))
