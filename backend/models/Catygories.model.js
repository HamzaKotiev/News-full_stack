const mongoose = require('mongoose');


const catygoriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },


});

const Catygories = mongoose.model('Catygories', userSchema);

module.exports = Catygories;