var mongoose = require('mongoose')

function createDBConnection() {
    mongoose.connect('mongodb://admin:admin123@ds119788.mlab.com:19788/findigodb')
}

module.exports = createDBConnection