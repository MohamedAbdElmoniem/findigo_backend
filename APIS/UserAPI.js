var UserModel = require('../Models/UserModel')
var mongoose = require('mongoose')

function createUserApis(app) {

    function formatCookie(sid) {
        return sid.split(':')[1].split('.')[0]
    }


    function authenticate(req, resp, next) {
        let sid = formatCookie(req.cookies["connect.sid"])
        if (req.session.user && sid === req.sessionID) {
            //logged in
            next()
        } else { resp.json({ message: "not authorized" }) }

    }


    app.post("/signup", async (req, resp) => {

        try {
            const { username, picture, email, phone, address, password } = req.body

            const found = await UserModel.findOne({ email })
            if (found) {
                resp.json({ message: 'user exists' })
            } else {
                const user = new UserModel({
                    _id: mongoose.Types.ObjectId(),
                    username,
                    picture,
                    email,
                    phone,
                    address,
                    password
                })

                await user.save()
                resp.json({ message: 'success' })
            }


        }
        catch (error) {
            resp.json({ message: 'error' })
        }
    })


    app.post("/login", async (req, resp) => {

        try {
            const { email, password } = req.body
            let user = await UserModel.findOne({
                email,
                password
            }).select("email phone address username picture posts")
            if (user) {
                req.session.user = user
                resp.json({ message: 'success', user })

            } else {
                resp.json({ message: 'error', user: null })

            }
        }

        catch (error) {
            resp.json({ message: 'error' })
        }

    })



    app.get("/logout", async (req, resp) => {
        try {
            await req.session.destroy()
            resp.json({ message: "loggedout successfully" })
        }
        catch (error) {
            resp.json({ message: "error" })
        }
    })
}

module.exports = createUserApis