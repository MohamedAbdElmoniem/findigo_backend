var mongoose = require('mongoose')

var LostPeopleDetailsModel = new mongoose.model('LostPeopleDetails',{
    _id:mongoose.Schema.Types.ObjectId,
    searcher: String,
    publisher:String,
    
    Users:{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
    LostPeople:{type:mongoose.Schema.Types.ObjectId,ref:'LostPeople'}
})

module.exports = LostPeopleDetailsModel