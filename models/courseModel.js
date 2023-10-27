const mongoose = require('mongoose');

const Schema = mongoose.Schema

const courseSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
        default: '',
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    length: {
        type: String,
        required: true
    },
    chapters: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    isFree: {
        type: Boolean,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Course', courseSchema)