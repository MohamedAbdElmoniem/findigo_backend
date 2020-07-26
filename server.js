//var fs = require('fs')
//var server = require('http')
var app = require('express')()
var bodyparser = require('body-parser')
var createDBConnection = require('./DBConnection')
var session = require('express-session')
var cookie_parser = require('cookie-parser')
var UserAPI = require('./APIS/UserAPI')
var PostsAPIS = require('./APIS/PostsAPIS')
var BookMarksAPIS = require('./APIS/BookMarksAPIS')
var uuid = require('uuid')
createDBConnection()

app.use(session({
    secret: 'mysession',
    genid: uuid.v4
}))

app.use(bodyparser.json())
app.use(cookie_parser())
UserAPI(app)
PostsAPIS(app)
BookMarksAPIS(app)

app.get('/', (req, resp) => {
    resp.send('hello to my server...')
}).listen(process.env.PORT || 8080)

// npm install -g nodemon server.js