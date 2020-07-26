var mongoose = require('mongoose')

var LostPeopleModel = new mongoose.model('LostPeople',{
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    age: String,
    location: String,
    
    LostPeopleDetails:[{type:mongoose.Schema.Types.ObjectId,ref:'LostPeopleDetails'}],
    Prize:{type:mongoose.Schema.Types.ObjectId,ref:'Prize'}
})

module.exports = LostPeopleModel