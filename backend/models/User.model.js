const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    nickname: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminstatus: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;