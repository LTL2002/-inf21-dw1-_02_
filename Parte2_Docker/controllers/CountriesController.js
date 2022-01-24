'use strict';

var utils = require('../utils/writer.js');
var CountriesController = require('../service/CountriesControllerService');

module.exports.retrieveCountries = function retrieveCountries (req, res, next) {
  CountriesController.retrieveCountries()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.createCountry = function createCountry(req, res, next, body) {
  CountriesController.createCountry(body)
    .then(CountriesController.retrieveCountry)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.deleteCountry = function deleteCountry(req, res, next, id) {
  CountriesController.deleteCountry(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.retrieveCountry = function retrieveCountry(req, res, next, id) {
  CountriesController.retrieveCountry(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};