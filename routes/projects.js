// projects.js
// Daniel Dobrowney
// Student ID: 301339355
// Dec 17, 2023

var express = require('express');
var router = express.Router();

//  Projects Page
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;