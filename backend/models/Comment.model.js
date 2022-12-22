const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    usernick: {
        type: String,
        required: true
    },
    text: {
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
    },
    news: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News'
    },

});

const Comment = mongoose.model('Comment', userSchema);

module.exports = Comment;