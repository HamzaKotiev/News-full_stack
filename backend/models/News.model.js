const mongoose = require('mongoose');


const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    catygories: {
        type: String,
        required: true
    },
    when: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

const News = mongoose.model('News', userSchema);

module.exports = News;