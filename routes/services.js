// services.js
// Daniel Dobrowney
// Student ID: 301339355
// Dec 17, 2023

var express = require('express');
var router = express.Router();

//  Services Page
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;