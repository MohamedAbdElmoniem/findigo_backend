var mongoose = require('mongoose')

var PrizeModel = new mongoose.model('Prize',{
    _id:mongoose.Schema.Types.ObjectId,
    value: String,

    LostPeople:[{type:mongoose.Schema.Types.ObjectId,ref:'LostPeople'}],
    PrizeType:{type:mongoose.Schema.Types.ObjectId,ref:'PrizeType'}
   
})

module.exports = PrizeModel