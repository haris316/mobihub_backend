const mongoose = require('mongoose');
const Phone = require('../models/phone.js')

const brandSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        brandImage: {
            type: String,
            required: true
        },
        phone: [{type: mongoose.Schema.Types.Object, ref: 'Phone'}]
});

module.exports = mongoose.model("Brand", brandSchema);