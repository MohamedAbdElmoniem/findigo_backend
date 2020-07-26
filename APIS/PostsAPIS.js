const mongoose = require('mongoose')
const PostModel = require("../Models/PostModel")

function postsAPIS(app) {


    app.post("/createpost", async (req, res) => {
        try {
            const { name, desc, photo, address, date, user, type, gender, current_location, last_seen, age } = req.body
            const newPost = new PostModel({
                _id: mongoose.Types.ObjectId(),
                name, desc, photo, address, date, user, type, gender, current_location, last_seen, age
            })
            await newPost.save()
            res.json({ message: 'success' })
        } catch (error) {

            res.json({ message: 'error' })
        }
    })

    app.post('/removepost', async (req, res) => {
        try {
            const { post_id } = req.body
            await PostModel.remove({ _id: post_id })
            res.json({ message: "removed" })
        } catch (error) {
            res.json({ message: "error" })
        }
    })

    app.post('/editpost', async (req, res) => {
        try {
            const { title, desc, photo, address, post_id } = req.body

            await PostModel.findOneAndUpdate({ _id: post_id }, { title, desc, photo, address })

            res.json({ message: "updated" })
        } catch (error) {
            res.json({ message: "error" })
        }


    })


    app.post('/getpostsbyuser', async (req, res) => {
        const { user } = req.body
        const posts = await PostModel.find({ user: user }).populate("user")
        res.json({ message: 'success', posts })
    })



    app.get('/getallposts', async (req, res) => {
        const posts = await PostModel.find({}).populate("user")
        res.json({ message: 'success', posts })
    })

    app.post('/getallpostsbytype', async (req, res) => {
        const { type } = req.body
        const posts = await PostModel.find({ type }).populate("user")
        res.json({ message: 'success', posts })
    })


}


module.exports = postsAPIS