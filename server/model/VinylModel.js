const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/albums'

mongoose.connect(dbUrl, { useNewUrlParser: true}, (err) => {
    if (err) {
        console.error(`Could not connect to database at ${dbUrl}`)
    } else {
        console.info(`Connection established to db at ${dbUrl}`)
    }
})

const Model = mongoose.model('Album', {
    artist: String,
    album: String,
    version: Number,
    label: String,
    releaseDate: Date,
    img: String,
    inCollection: Boolean,
    inWishlist: Boolean    
})

module.exports = Model