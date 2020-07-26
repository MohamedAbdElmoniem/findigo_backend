var mongoose = require('mongoose')

var PrizeTypeModel = new mongoose.model('PrizeType',{
    _id:mongoose.Schema.Types.ObjectId,
    name: String,

    Prize:[{type:mongoose.Schema.Types.ObjectId,ref:'Prize'}]
   
})

module.exports = PrizeTypeModel