const express = require('express');
const { createBrand, addToBrand, getBrands } = require('../controller/brand');
const router = express.Router();

router.post("/brand/create",
    createBrand
);


router.post("/brand/addToBrand",
    addToBrand
);

router.get("/brand/getBrands",
    getBrands
);

module.exports = router;
