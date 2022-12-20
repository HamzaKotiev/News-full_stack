const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
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
    }

});

const Comment = mongoose.model('Comment', userSchema);

module.exports = Comment;