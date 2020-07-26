var mongoose = require('mongoose')

var QuestionModel = new mongoose.model('Questions',{
    _id:mongoose.Schema.Types.ObjectId,
    Question: String,
    
})

module.exports = QuestionModel