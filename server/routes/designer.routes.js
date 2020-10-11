const { response } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Tshirt = require('../models/tshirt.model')
// Endpoints


router.get('/viewOneShirt/:shirt_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.shirt_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Tshirt.findById(req.params.shirt_id)
        .then(shirt => res.json(shirt))
        .catch(err => console.log(err))
})

router.get('/viewAllClothing', (req, res, next) => {

    Tshirt.find()
        .then(response => res.json(response))
        .catch(err => console.log({ err }))

})

router.post('/newTshirtCustom', (req, res, next) => {

    const { text } = req.body
    const { typeOfShirt } = req.body
    const { logo } = req.body
    const { color } = req.body

    Tshirt.create({ text, typeOfShirt, logo, color })
        .then(res => console.log(res))
        .catch(err => console.log('err', { err }))


    // })
    console.log('BODY', text)
    // res.status(200).json('holaaa')
})


module.exports = router