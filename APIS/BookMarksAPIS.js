const mongoose = require('mongoose')
const BookMarksModel = require("../Models/BookMarksModel")
const { response } = require('express')

function bookmarksAPIS(app) {

    app.post("/bookmarkpost", async (req, res) => {
        try {
            const { user, post, bookmarked } = req.body
            const foundBookMark = await BookMarksModel.findOne({ user, post })
            if (foundBookMark && foundBookMark.bookmarked === true) {

                await BookMarksModel.findOneAndUpdate({ user, post }, { bookmarked: false })
                res.json({ message: "updated" })
            }
            else if (foundBookMark && foundBookMark.bookmarked === false) {
                await BookMarksModel.findOneAndUpdate({ user, post }, { bookmarked: true })
                res.json({ message: "updated" })
            }
            else if (!foundBookMark) {
                const newBookMark = new BookMarksModel({
                    _id: mongoose.Types.ObjectId(),
                    user,
                    post,
                    bookmarked: true
                })
                await newBookMark.save()
                res.json({ message: 'saved' })
            } else {
                res.json({ message: 'error' })
            }
        } catch (error) {
            res.json({ message: 'error' })
        }

    })

    app.post("/getbookmarkedpost", async (req, resp) => {
        const { user, post } = req.body

        const foundPost = await BookMarksModel.findOne({ user, post })
        if (foundPost) {
            resp.json({ bookmarked: foundPost.bookmarked })
        } else {
            resp.json({ bookmarked: false })
        }
    })

    app.post("/getallsavedposts", async (req, res) => {
        const { user } = req.body
        const getallBookmarks = await BookMarksModel.find({ user }).populate({
            path: "post",
            populate: {
                path: "user"
            }
        }).lean()
        res.json({ message: 'success', posts: getallBookmarks })
    })
}

module.exports = bookmarksAPIS   
