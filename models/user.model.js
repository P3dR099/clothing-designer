const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)
module.exports = User