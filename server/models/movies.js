/*
File Name: movie.js
Name: Kay Yan Cheung
Student ID: 301183574
Web App: comp229-s2022-midterm-301183574
 */

let mongoose = require('mongoose');

let Movies = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Released: Number,
    Director: String,
    Genre: String,
  },
  {
    collection: 'movies',
  }
);

module.exports = mongoose.model('Movies', Movies);
