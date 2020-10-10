const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Tshirt = require('../models/tshirt.model')
// Endpoints


router.get('/newTshirtCustom', (req, res, next) => {

    res.send('hola')
    res.status(200).json('holaaa')
})


module.exports = router