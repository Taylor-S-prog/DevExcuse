const mongoose = require('mongoose')
const Schema = mongoose.Schema


const uniqueValidator = require('mongoose-unique-validator')

const excuseSchema = new Schema({

  http_code: {
    type: String,
    unique: true,
    required: true,

  },
  tag: {
    type: String,
  },
  message: {
    type: String,
    required: true,
   unique: true,

  }
  
});

excuseSchema.plugin(uniqueValidator);


module.exports  = mongoose.model('Excuses', excuseSchema)
