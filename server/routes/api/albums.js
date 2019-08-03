const express = require('express')
const router = express.Router()
const VinylModel = require('../../model/VinylModel')

// gets all vinyls 
router.get('/', (req, res) => {
    VinylModel.find().lean().exec((err, vinyls) => {
        if (err) {
            return res.json({ msg: 'Could not retrieve vinyls' })
        }
        console.log('Vinyls fetched from server')
        res.json(vinyls)
    })
})

// Get a single vinyl
router.get('/:id', (req, res) => {
    VinylModel.findById(req.params.id).lean().exec((err, vinyl) => {
        if (err) {
            res.status(400).json({ msg: `No vinyl with id ${req.params.id}` })
        } else {
            res.json(vinyl)
        }
    })
})

// Create vinyl
router.post('/', (req, res) => {
    const newVinyl = getBody(req)
    if (!newVinyl.artist || !newVinyl.album) {
        return res.status(400).json({ msg: 'Please include an artist and album' })
    }

    newVinyl.save().then(() => console.log('Vinyl persisted', newVinyl))
    res.json(newVinyl) // return all vinyls
})

// Update vinyl
router.put('/:id', (req, res) => {

    const updateVinyl = getBody(req)

    console.log(updateVinyl)

    VinylModel.findById(req.params.id, (err, vinyl) => {
        if (err) {
            res.status(400).json({ msg: `No vinyl with id ${req.params.id}` })
        } else {
            vinyl.artist = updateVinyl.artist
            vinyl.album = updateVinyl.album
            vinyl.version = updateVinyl.version
            vinyl.label = updateVinyl.label
            vinyl.releaseDate = updateVinyl.releaseDate
            vinyl.img = updateVinyl.img
            vinyl.inCollection = updateVinyl.inCollection
            vinyl.inWishlist = updateVinyl.inWishlist
            vinyl.save().then(() => res.json({ msg: 'Vinyl updated', vinyl }))
        }
    })
})

// Delete vinyl
router.delete('/:id', (req, res) => {
    VinylModel.findByIdAndDelete(req.params.id, (err, vinyl) => {
        if (err) {
            res.json({ msg: 'Could not remove vinyl with id ' + req.params.id })
        } else {
            console.log('Vinyl deleted')
        }
    })
})

// Delete all
router.delete('/', (req, res) => {
    VinylModel.deleteMany({}, (err) => {
        if(err) {
            res.json({msg: 'Could not remove all objects'})
        } else {
            res.json({msg: 'Db cleared'})
        }
    })
})

let getBody = (req) => {
    const body = req.body
    const vinyl = new VinylModel({
        artist: body.artist,
        album: body.album,
        version: body.version,
        label: body.label,
        releaseDate: body.releaseDate,
        img: body.img,
        inCollection: body.inCollection,
        inWishlist: body.inWishlist
    })
    return vinyl
}

module.exports = router