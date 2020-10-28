const { response } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { Passport } = require('passport/lib')

const Tshirt = require('../models/tshirt.model')
// Endpoints

const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login', { errorMsg: 'Desautorizado, incia sesión para continuar' })
//const checkRole = rolesToCheck => (req, res, next) => req.isAuthenticated() && rolesToCheck.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizado, no tienes permisos para ver eso.' })

router.get('/viewMyShirts/:user_id', (req, res, next) => {

    Tshirt.find({ user: req.params.user_id })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

router.get('/viewShirt/:shirt_id', (req, res) => {

    console.log(req.user)
    if (!mongoose.Types.ObjectId.isValid(req.params.shirt_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Tshirt.findById(req.params.shirt_id)
        .then(shirt => res.json(shirt))
        .catch(err => console.log(err))
})

router.post('/newTshirtCustom', (req, res, next) => {

    console.log(req.body)

    Tshirt.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

router.delete('/deleteShirt/:shirt_id', (req, res) => {

    const shirt_id = req.params.shirt_id

    Tshirt.findByIdAndDelete(shirt_id)
        .then(shirtDel => res.json(shirtDel))
        .catch(err => res.json({ err }))

})



module.exports = router