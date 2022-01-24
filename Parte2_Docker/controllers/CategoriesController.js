'use strict';

var utils = require('../utils/writer.js');
var CategoriesController = require('../service/CategoriesControllerService');

module.exports.retrieveCategories = function retrieveCategories (req, res, next) {
  CategoriesController.retrieveCategories()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.createCategory = function createCategory(req, res, next, body) {
  CategoriesController.createCategory(body)
    .then(CategoriesController.retrieveCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.deleteCategory = function deleteCategory(req, res, next, id) {
  CategoriesController.deleteCategory(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.retrieveCategory = function retrieveCategory(req, res, next, id) {
  CategoriesController.retrieveCategory(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};