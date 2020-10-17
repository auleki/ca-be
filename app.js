require('dotenv').config;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');


// Imports 
const clothRouter = require('./routes/cloth');


// Middlewares
app.use(cors());
app.use(morgan('dev'));


app.use('/clothing', clothRouter);

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log('Server up @ PORT ' + PORT))