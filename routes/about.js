// about.js
// Daniel Dobrowney
// Student ID: 301339355
// Dec 17, 2023

var express = require('express');
var router = express.Router();

//  About Me Page
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;