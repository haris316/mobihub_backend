const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    phoneName: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        // required: true,
        unique: true
    },
    phoneImage: {
        type: String
    }
});

module.exports = mongoose.model('Phone', phoneSchema);