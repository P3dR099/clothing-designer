const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tshirtSchema = new Schema({

    typeOfShirt: {
        type: String,
        default: 'tshirt',
        required: false
    },
    color: {
        type: String,
        required: false,
        minlength: 2,
        default: 'white'
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

    lefttext: {
        type: Number,
        required: true
    },

    toptext: {
        type: Number,
        required: false
    },

    leftimg: {
        type: Number,
        required: false
    },

    topimg: {
        type: Number,
        required: false
    }

}, {
    timestamps: true
})

const Tshirt = mongoose.model('Tshirt', tshirtSchema)
module.exports = Tshirt