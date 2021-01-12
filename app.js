require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Imports 
const clothRouter = require('./routes/cloth');
const orderRouter = require('./routes/orders');
const userRouter = require('./routes/user')
const quizRouter = require('./routes/quiz')

const DB_URL = process.env.MONGODB_URL;

const mOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

mongoose.connect(DB_URL, mOptions, (err) => {
  err ? console.log('error while connecting', err) : console.log('DB Connected');
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



const baseUrl = '/api'
app.use(`${baseUrl}/clothing`, clothRouter);
app.use(`${baseUrl}/orders`, orderRouter)
app.use(`${baseUrl}/user`, userRouter)
app.use(`${baseUrl}/quiz`, quizRouter)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  () => console.log(`Server up @ http://localhost:${PORT}`))