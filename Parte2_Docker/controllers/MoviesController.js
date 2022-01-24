'use strict';

var utils = require('../utils/writer.js');
var MoviesController = require('../service/MoviesControllerService');

module.exports.retrieveMovies = function retrieveMovies (req, res, next) {
  MoviesController.retrieveMovies()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.createMovie = function createMovie(req, res, next, body) {
  MoviesController.createMovie(body)
    .then(MoviesController.retrieveMovie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.deleteMovie = function deleteMovie(req, res, next, id) {
  MoviesController.deleteMovie(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.retrieveMovie = function retrieveMovie(req, res, next, id) {
  MoviesController.retrieveMovie(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};