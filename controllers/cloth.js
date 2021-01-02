// cSModel - Cloth Section Model 
const clothSectionModel = require('../models/clothSection');
const clothModel = require('../models/cloth');
const mongoose = require('mongoose');
const axios = require('axios');


exports.viewAllClothes = async (req, res) => {
  // const dbUrl = 'http://localhost:5000/clothing'
  try {
    const data = await clothSectionModel.find({}); 
    res.send(data);
  } catch (error) {
    res.send(error);
  }
}

exports.addCloth = async (req, res) => {

    try {

      const newSection = new clothSectionModel({
        "title": "Robes",
        "products": [
          {
            "name": "Joggers 01",
            "price": 11000, 
            "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20jogger%20for%20N11,000",
            "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239415/joggers01_1_adf50r.png"
          },
          {
            "name": "Elo Wears",
            "price": 11000, 
            "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20jogger%20for%20N11,000",
            "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/joggers02_1_kcaimq.png"
          }
        ]
  
      })

    const savedSection = await newSection.save();
    mongoose.connection.close();
    res.send(savedSection);

    } catch (error) {
      res.send(error)
    }
 
}
