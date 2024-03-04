// routes/contactus.js

const express = require('express');
const router = express.Router();
const contactusController = require('../controllers/contactusController');

router.use('/', contactusController);

module.exports = router;
