// contact
// Daniel Dobrowney
// Student ID: 301339355
// Dec 17, 2023

var express = require('express');
var router = express.Router();

//  Contact Me Page
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;