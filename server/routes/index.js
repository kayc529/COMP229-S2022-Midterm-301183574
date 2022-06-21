/*
File Name: index.js
Name: Kay Yan Cheung
Student ID: 301183574
Web App: comp229-s2022-midterm-301183574
 */

// modules required for routing
let express = require('express');
let router = express.Router();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    movies: '',
  });
});

module.exports = router;
