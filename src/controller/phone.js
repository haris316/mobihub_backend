const Phone = require("../models/phone");
const slugify = require("slugify");
const Brand = require("../models/brand");
// const brand = require("../models/brand");


exports.createPhone = (req, res) => {
    const { phoneName, brand, phoneImage } = req.body;

    const phones = new Phone({
        phoneName: phoneName,
        slug: slugify(phoneName),
        brand: brand,
        phoneImage: phoneImage
    });

    phones.save((error, phones) => {
        if (error) return res.status(400).json({ error });
        else {
            res.status(201).json({ phones });
        }
    });
};


exports.getPhones = async (req, res) => {
    Phone.find({}).exec((error, phones) => {
        if (phones) {
            res.status(200).json({ phones })
        }
    });
};

// exports.getPhonesByBrand = (req, res) => {
//     console.log("Get Products By Brand");
//     const { slug } = req.params;
//     Brand.findOne({ slug: slug })
//         .select('_id')
//         .exec((error, brand) => {
//             if (error) {
//                 return res.status(400).json(error);
//             }

//             if (brand) {
//                 Phone.find({ brand: brand._id })
//                     .exec((error, phones) => {
//                         res.status(200).json({ phones })
//                     })
//             }
//         });
// }