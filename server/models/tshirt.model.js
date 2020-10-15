const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tshirtSchema = new Schema({

    typeOfShirt: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
        minlength: 2,
        default: 'rgb(250, 239, 147)'
    },

    text: {
        type: String,
        required: false,
    },

    logo: {
        type: String,
        required: false
    },

    user: {
        type: Schema.Types.ObjectId,
        rel: 'User',
        required: true
    },

    leftText: {
        type: Number,
        required: false
    },

    topText: {
        type: Number,
        required: false
    },

    leftImg: {
        type: Number,
        required: false
    },

    topImg: {
        type: Number,
        required: false
    }

}, {
    timestamps: true
})

const Tshirt = mongoose.model('Tshirt', tshirtSchema)
module.exports = Tshirt