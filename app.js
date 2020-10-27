require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');


// Imports 
const clothRouter = require('./routes/cloth');

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



app.use('/api/clothing', clothRouter);

const PORT = process.env.PORT || 5000;
// const PORT = 3000



app.listen(PORT, () => console.log('Server up @ PORT ' + PORT))