// index.js
// Daniel Dobrowney
// Student ID: 301339355
// Dec 17, 2023

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

module.exports = router;
