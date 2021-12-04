const express = require('express');
const { createPhone, getPhones, getPhonesByBrand } = require('../controller/phone');
const router = express.Router();

router.post("/phone/create",
    createPhone
);

router.get("/phone/getPhones",
    getPhones
);

// router.get("/phone/getPhonesByBrand/:slug",
//     getPhonesByBrand
// );

module.exports = router;
