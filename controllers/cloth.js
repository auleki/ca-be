// Cloth Section Model - cSModel
const cSModel = require('../models/clothSection');

exports.viewAllClothes = async (req, res) => {
  const data = await cSModel.find({});
  res.send(data);
}

