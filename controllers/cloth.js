// cSModel - Cloth Section Model 
const cSModel = require('../models/clothSection');
const clothModel = require('../models/cloth');
const mongoose = require('mongoose');

exports.viewAllClothes = async (req, res) => {
  const data = await clothModel.find({});
  res.send(data);
}

exports.addCloth = async (req, res) => {
  // try {
    const newCloth = new clothModel({
      name: "Green Jungles",
      category: "Shorts",
      price: 4000,
      imgUrl: 'use this for now',
      orderLink: 'order via whats app'
    })

    const savedCloth = await newCloth.save();
    
    savedCloth
      .then(data => {
        console.log('note saved');
        res.send(data)
        mongoose.connection.close();
      })
      .catch(e => console.log('error saving', e))  
}