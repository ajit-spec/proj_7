const mongoose = require('mongoose')

const {Schema} = mongoose;

const fileschema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    sender: String,
    reciever: String
}, {
    timestamps: true
});


const File = mongoose.model('File', fileschema);

module.exports = File