const Brand = require('../models/brand');
const slugify = require('slugify');
const Phone = require('../models/phone')


exports.createBrand = (req, res) => {
    const { name, brandImage } = req.body;

    const brand = new Brand({
        name: name,
        slug: slugify(name),
        brandImage: brandImage
    });

    brand.save((error, brand) => {
        if (error) return res.status(400).json({ error });
        if (brand) {
            res.status(201).json({ brand })
        }
    });
};

exports.addToBrand = (req, res) => {
    const Phone = require('../models/phone')

    const HPhone = new Phone({
        "phoneName": req.body.phoneName,
        "phoneImage": req.body.phoneImage
        // "phoneSlug": slugify(req.body.phoneName)
    })

    HPhone.save((error, HPhone) => {
        if (error) return res.status(400).json({ error });
        else {
            // res.status(201).json({ HPhone });
            Brand.findOneAndUpdate({ 'name': req.body.name },
                {
                    $addToSet: {
                        "phone": HPhone,
                    },
                }
            ).exec((error, brands) => {
                if (error) {
                    return res.status(400).json({ error });
                }
                if (brands) {

                    brands.save((error, brand) => {
                        if (error) return res.status(400).json({ error });
                        if (brand) {
                            res.status(201).json({ brand });
                        }
                    })
                }
                // brands.save((error, brand) => {
                //     if (error) return res.status(400).json({ error });
                //     else {
                //         res.status(201).json({ brand });
                //     }
                // })

            });
        }
    });
};


exports.getBrands = async (req, res) => {
    Brand.find({}).exec((error, brands) => {
        if (brands) {
            res.status(200).json({ brands })
        }
    });
};


