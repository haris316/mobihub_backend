const slugify = require('slugify');
const Contact = require('../models/contact');

exports.contactEntry = (req, res) => {

    const { brand, model, problem, name, address, contact, optional } = res.body;
    const collection = new Contact({
        brand: brand,
        model: model,
        problem: problem,
        name: name,
        address: address,
        contact: contact,
        optional: optional
    });

    collection.save((error, contact) => {
        if (error) return res.status(400).json({ error });
        if (collection) {
            res.status(201).json({ contact })
        }
    });
}


exports.getContact = async (req, res) => {
    Contact.find({}).exec((error, contact) => {
        if (contact) {
            res.status(200).json({ contact })
        }
    });
};