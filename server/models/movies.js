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
