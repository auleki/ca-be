const Cloth = require('../models/cloth')
const cloudinary = require('cloudinary').v2
const config = require('../utils/config')
const axios = require('axios')

// cloudinary.config({
//   cloud_name: config.CLOUD_NAME,
//   api_key: config.API_KEY,
//   api_secret: config.API_SECRET
// })

exports.fetchClothes = async (req, res) => {
  try {
    const fetchedClothes = await Cloth.find({})
    res.status(200).json({message: "showing all clothes", fetchedClothes})
  } catch (error) {
    console.log(error)
  }
}

exports.populateDb = async (req, res) => {
  try {
    const data = [
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      },
      {
        "size":"Extra Large",
        "sizeAbbreviation":"XL",
        "isChecked": false
      }
    ],
    "name": "Sweat 01",
    "price": 8000,
    "category": "Sweatshirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239437/sweat01-removebg_kalqrc.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239437/sweat01-removebg_kalqrc.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239437/sweat01-removebg_kalqrc.png"
    ],
    "inStock": true,
    "productId": "00X62157CA"
  },
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      },
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Sweat 02",
    "price": 8000,
    "category": "Sweatshirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606551657/sweat02-removebg_sebikw.png",
      "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606551657/sweat02-removebg_sebikw.png",
      "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606551657/sweat02-removebg_sebikw.png"
    ],
    "inStock": true,
    "productId": "00X53874CA"
  },
  {
    "sizes": [
       {
      "size":"Large",
      "sizeAbbreviation":"L",
      "isChecked": false
    },
    {
      "size":"Extra Large",
      "sizeAbbreviation":"XL",
      "isChecked": false
    }
    ],
    "name": "Sweat 03",
    "price": 8000,
    "category": "Sweatshirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239433/sweat03_1_citj9x.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239433/sweat03_1_citj9x.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239433/sweat03_1_citj9x.png"
    ],
    "inStock": true,
    "productId": "00X90610CA"
  },
  {
    "sizes": [
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Sweat 04",
    "price": 8000,
    "category": "Sweatshirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239432/sweat04_1_gquhex.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239432/sweat04_1_gquhex.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239432/sweat04_1_gquhex.png"
    ],
    "inStock": true,
    "productId": "00X99776CA"
  },
  {
    "sizes": [
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Sweat 05",
    "price": 8000,
    "category": "Sweatshirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239431/sweat05_1_jofsp6.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239431/sweat05_1_jofsp6.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239431/sweat05_1_jofsp6.png"
    ],
    "inStock": true,
    "productId": "00X72782CA"
  },
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Polo 01",
    "price": 8000,
    "category": "Polos",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo01_1_onkfll.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo01_1_onkfll.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo01_1_onkfll.png"
    ],
    "inStock": true,
    "productId": "00X13073CA"
  },
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      },
      {
        "size":"Extra Large",
        "sizeAbbreviation":"XL",
        "isChecked": false
      }
    ],
    "name": "Polo 03",
    "price": 8000,
    "category": "Polos",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo03_1_upvwyk.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo03_1_upvwyk.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239416/polo03_1_upvwyk.png"
    ],
    "inStock": true,
    "productId": "00X97670CA"
  },
  {
    "sizes":[
      {
        "size":"Extra Large",
        "sizeAbbreviation":"XL",
        "isChecked": false
      },
      {
        "size":"Extra Extra Large",
        "isChecked": false,
        "sizeAbbreviation":"XXL"
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Polo 04",
    "price": 8000,
    "category": "Polos",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239415/polo04_1_taolig.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239415/polo04_1_taolig.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239415/polo04_1_taolig.png"
    ],
    "inStock": true,
    "productId": "00X15246CA"
  },
  {
    "sizes": [
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Polo 05",
    "price": 8000,
    "category": "Polos",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/polo05_1_dfhpis.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/polo05_1_dfhpis.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/polo05_1_dfhpis.png"
    ],
    "inStock": true,
    "productId": "00X1253CA"
  },
  {
    "sizes": [
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "Polo 06",
    "price": 8000,
    "category": "Polos",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239421/polo06_1_amylhf.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239421/polo06_1_amylhf.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239421/polo06_1_amylhf.png"
    ],
    "inStock": true,
    "productId": "00X31196CA"
  },
  {
    "sizes": [
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 01",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/shirt01_1_gmexzt.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/shirt01_1_gmexzt.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239418/shirt01_1_gmexzt.png"
    ],
    "inStock": true,
    "productId": "00X9200CA"
  },
  {
    "sizes": [
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 02",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt02_1_tcygjl.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt02_1_tcygjl.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt02_1_tcygjl.png"
    ],
    "inStock": true,
    "productId": "00X78408CA"
  },
  {
    "sizes": [
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 03",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601414422/shirt03_1_n15cns.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601414422/shirt03_1_n15cns.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601414422/shirt03_1_n15cns.png"
    ],
    "inStock": true,
    "productId": "00X53472CA"
  },
  {
    "sizes": [
      {
        "size":"Extra Extra Large",
        "isChecked": false,
        "sizeAbbreviation":"XXL"
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 04",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt04_1_jz01yh.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt04_1_jz01yh.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239419/shirt04_1_jz01yh.png"
    ],
    "inStock": true,
    "productId": "00X58502CA"
  },
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 05",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt05_1_mlixb0.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt05_1_mlixb0.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt05_1_mlixb0.png"
    ],
    "inStock": true,
    "productId": "00X65937CA"
  },
  {
    "sizes": [
      {
        "size":"Large",
        "sizeAbbreviation":"L",
        "isChecked": false
      },
      {
        "size":"Extra Large",
        "sizeAbbreviation":"XL",
        "isChecked": false
      },
      {
        "size":"Extra Extra Large",
        "sizeAbbreviation":"XXL",
        "isChecked": false
      },
      {
        "size":"Small",
        "sizeAbbreviation":"S",
        "isChecked": false
      }
    ],
    "name": "T-Shirt 06",
    "price": 6000,
    "category": "T-Shirts",
    "imageUrls": [
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt06_1_yg1v5r.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt06_1_yg1v5r.png",
      "https://res.cloudinary.com/checkadigs/image/upload/v1601239422/shirt06_1_yg1v5r.png"
    ],
    "inStock": false,
    "productId": "00X59299CA"
  }
]
    const savedClothes = await Cloth.insertMany(data)
    res.status(201).json({msg: "db successfully populated", savedClothes})
  } catch (error) {
    res.status(400).json({msg: "error while populating database", error})
  }
}

exports.addCloth = async (req, res) => {
  try {
    // console.table('PAYLOAD', req.body)
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/checkadigs-cloud'
    let imageUrl
    const { image } = req.files
    const { name, price, category, inStock, productId } = req.body
    // console.log('IMAGE FILE:', image)
    // await cloudinary.uploader.upload(image, (result, error) => {
    //   if (error) console.error(error)
    //   console.log('Upload Complete', result.url)
    //   imageUrl = result.url
    // })

    // console.log('UPLOAD RESPONSE:', imageUrl)
    // const newCloth = { name, category, price, image }
    // console.log(newCloth)
    // res.send('Hitting Upload Route')
  } catch (error) {
    res.json(error)
  }
}

exports.uploadCloth = async (req, res) => {
  try {
    const { name, price, category, imageUrl, inStock, productId } = req.body
    const clothing = { name, price, category, imageUrl, inStock, productId }
    console.log('CLOTHING INFO:', clothing)
    const newCloth = new Cloth(clothing)
    const savedCloth = await newCloth.save()
    // const result = await cloudinary.uploader.upload(image.path)
    res.json({ data: savedCloth, msg: 'success' })
  } catch (error) {
    res.json(error)
  }
}

exports.deleteCloth = async (req, res) => {
  try {
    const id = req.params.id
    const result = await Cloth.findByIdAndDelete(id)
    // res.json({ data: result, msg: 'cloth deleted' })
    res.json({ msg: 'cloth deleted' })
  } catch (error) {
    res.status(400).json({ msg: 'error occurred while updating cloth', error })
  }
}

exports.updateCloth = async (req, res) => {
  try {
    let id = req.params.id
    let payload = req.body
    let options = {
      upsert: false,
      new: true
    }
    console.log('ID IN REQ: ', id)
    console.log('PAYLOAD: ', payload)
    const result = await Cloth.findByIdAndUpdate(
      id,
      payload,
      options,
      (err, docs) => {
        if (err) console.error(err)
        console.log('Doc Updated', docs)
        res.status(200).send(docs)
      }
    )
  } catch (error) {
    res.status(400).json({ msg: 'error occurred while updating cloth', error })
  }
}

exports.findCloth = async (req, res) => {
  try {
    let id, foundCloth
    id = req.params.id
    foundCloth = await Cloth.findOne({ productId: id })
    res.json(foundCloth)
  } catch (error) {
    res.status(400).json(error)
  }
}
