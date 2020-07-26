var mongoose = require('mongoose')

var UserModel = new mongoose.model('Users',{
    _id:mongoose.Schema.Types.ObjectId,
    username: String,
    picture: String,
    email:String,
    phone:String,
    address:String,
    password:String,
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Posts'}],
})

module.exports = UserModel