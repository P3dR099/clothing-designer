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

    logoUrl: {
        type: String,
        required: false
    },

    leftText: {
        type: Number,
        required: true
    },

    topText: {
        type: Number,
        required: false
    },

    imgX: {
        type: Number,
        required: false
    },
    imgY: {
        type: Number,
        required: false
    },
    scaleImgX: {
        type: Number,
        required: true
    },
    scaleImgY: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        rel: 'User',
        required: true
    },
}, {
    timestamps: true
})

const Tshirt = mongoose.model('Tshirt', tshirtSchema)
module.exports = Tshirt