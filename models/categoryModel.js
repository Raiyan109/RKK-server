const mongoose = require('mongoose');

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    courses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course',
        required: true
    }]
})


module.exports = mongoose.model('Category', categorySchema)