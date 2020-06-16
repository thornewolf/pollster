const mongoose = require('mongoose')

const Schema = mongoose.Schema

const pollSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280
    },
    answers: [{
        body: {
            type: String,
            minlength: 1,
            maxlength: 280
        }
    }],
}, {
    timestamps: true
})

const Poll = mongoose.model('Poll', pollSchema)

module.exports = Poll 