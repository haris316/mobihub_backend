const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    problem: {
        type: Array,
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true,
    },
    optional:{
        type: String
    }
});

module.exports = mongoose.model("Contact", contactSchema);