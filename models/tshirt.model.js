const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tshirtSchema = new Schema({
    imageShirt: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        minlength: 8
    },

    text: {
        type: String,
        required: false,
    },

    logo: {
        type: String,
        required: false
    },

    owner: {
        type: Schema.Types.ObjectId,
        rel: 'User'
    }
}, {
    timestamps: true
})

const Tshirt = mongoose.model('Tshirt', tshirtSchema)
module.exports = Tshirt