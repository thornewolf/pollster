const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
    pollname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    questions: [{body: String}]
}, {
    timestamps: true
})

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll 