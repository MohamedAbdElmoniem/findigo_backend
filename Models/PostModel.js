const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    desc: String,
    photo: String,
    address: String,
    current_location: String,
    last_seen: String,
    date: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    type: String,
    gender: String,
    age: String
})

const PostModel = new mongoose.model("Posts", PostSchema)

module.exports = PostModel 