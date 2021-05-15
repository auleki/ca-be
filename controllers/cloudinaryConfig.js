const cloudinary = require('cloudinary')
const multer = require('multer')
const path = require('path')
const DataUri = require('datauri')
const storage = multer.memoryStorage()
const { config, uploader } = cloudinary

const dUri = new DataUri()
const dataUri = req =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer)
const multerUploads = multer({ storage }).single('image')
const cloudinaryConfig = () =>
  config({
    cloud_name: 'dyj6pqx6d',
    api_key: 354837234799329,
    api_secret: 'PccJMcFx-1jiK-VCVmQipZXy1t8'
  })

module.exports = { cloudinaryConfig, multerUploads, uploader, dataUri }
