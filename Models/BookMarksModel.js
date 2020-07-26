const mongoose = require('mongoose')

const BookMarksSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Posts" },
    bookmarked: Boolean
})


const BookMarksModel = new mongoose.model("BookMarks", BookMarksSchema)

module.exports = BookMarksModel