const express = require('express');
const { contactEntry, getContact } = require('../controller/contact');
const router = express.Router();

router.post("/contact/submit", contactEntry);

router.get("/contact/getContact", getContact);

module.exports = router;
