'use strict';

var utils = require('../utils/writer.js');
var ProducersController = require('../service/ProducersControllerService');

module.exports.retrieveProducers = function retrieveProducers (req, res, next) {
  ProducersController.retrieveProducers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.createProducer = function createProducer(req, res, next, body) {
  ProducersController.createProducer(body)
    .then(ProducersController.retrieveProducer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.deleteProducer = function deleteProducer (req, res, next, id) {
  ProducersController.deleteProducer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.retrieveProducer = function retrieveProducer (req, res, next, id) {
  ProducersController.retrieveProducer(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

