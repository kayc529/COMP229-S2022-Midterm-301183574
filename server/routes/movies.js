// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// call the movies model
let movies = require('../models/movies');

/* GET movies List page. READ */
router.get('/', (req, res, next) => {
  // find all movie in the books collection
  movies.find((err, list) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('movies/index', {
        title: 'Movies',
        list: list,
      });
    }
  });
});

//  GET the Movies Details page in order to add a new Movies
router.get('/add', (req, res, next) => {
  res.render('movies/details', {
    title: 'Add a Movie',
    list: {},
  });
});

// POST process the Movies Details page and create a new Movies - CREATE
router.post('/add', (req, res, next) => {
  let newMovie = {
    Title: req.body.title,
    Description: req.body.description,
    Released: req.body.released,
    Director: req.body.director,
    Genre: req.body.genre,
  };

  console.log('NEW MOVIE', newMovie);

  movies.create(newMovie, (err, movie) => {
    if (err) {
      console.log(err);
      res.end(err);
    }

    res.redirect('/movies');
  });
});

// GET the Movies Details page in order to edit an existing Movies
router.get('/:id', (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
});

module.exports = router;
