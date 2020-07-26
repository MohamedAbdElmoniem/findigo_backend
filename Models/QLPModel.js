var mongoose = require('mongoose')

var QLPModel = new mongoose.model('QLP',{
    
    answer: String,

    LostPeople:[{type:mongoose.Schema.Types.ObjectId,ref:'LostPeople'}],
    Questions:[{type:mongoose.Schema.Types.ObjectId,ref:'Questions'}]
   
})

module.exports = QLPModel