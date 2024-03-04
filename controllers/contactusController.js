// controllers/contactusController.js

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Use body-parser middleware to parse URL-encoded data
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('contactus', { path: '/contactus' }); // Render the contactus.ejs template
});

router.post('/', (req, res) => {
    // Ensure that req.body is defined and contains the expected properties
    if (req.body && req.body.name && req.body.email && req.body.phone) {
        console.log('Received contact form submission:');
        console.log('Name:', req.body.name);
        console.log('Email:', req.body.email);
        console.log('Phone Number:', req.body.phone);
        
        // Redirect the user or render a thank you page
        res.send('<h1>Thank you for your message!</h1>');
    } else {
        // Handle the case where form data is missing or incomplete
        res.status(400).send('Invalid form data');
    }
});

module.exports = router;
