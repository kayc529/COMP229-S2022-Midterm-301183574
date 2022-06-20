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
  let movieId = req.params.id;

  movies.findById(movieId, (err, movieToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    }

    console.log('movie to edit: ', movieToEdit);
    res.render('movies/details', {
      title: 'Edit Movie',
      list: movieToEdit,
    });
  });
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
  let movieId = req.params.id;

  let updatedMovie = {
    _id: movieId,
    Title: req.body.title,
    Description: req.body.description,
    Released: req.body.released,
    Director: req.body.director,
    Genre: req.body.genre,
  };

  movies.updateOne({ _id: movieId }, updatedMovie, (err, movie) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    res.redirect('/movies');
  });
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  let movieId = req.params.id;

  movies.remove({ _id: movieId }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }

    res.redirect('/movies');
  });
});

module.exports = router;
