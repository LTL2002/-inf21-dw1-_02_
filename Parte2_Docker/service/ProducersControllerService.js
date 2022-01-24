'use strict';
var sql = require('../utils/db.js');

exports.retrieveProducers = function () {
    return new Promise(function (resolve, reject) {
      sql.query('SELECT * FROM producers', function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      });
    });
  };
exports.createProducer = function (body) {
    return new Promise(function (resolve, reject) {
      console.log(body);
      sql.query("INSERT INTO producers (idproducer,producername) Values(?,?)", [body.idproducer, body.producername], function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res.insertId);
          resolve(res.insertId);
        }
      });
    });
  };
exports.deleteProducer = function (id) {
    return new Promise(function (resolve, reject) {
      sql.query('DELETE FROM producers WHERE idproducer = ?', [id], function (err, res) {
        if (err || !res.affectedRows) {
          console.log(err);
          console.log(res);
          reject();
        } else {
          console.log(res);
          resolve({deleted: id});
        }
      });
    });
  };
exports.retrieveProducer = function (id) {
    return new Promise(function (resolve, reject) {
      sql.query('SELECT * FROM producers WHERE idproducer = ?', [id], function (err, res) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(res);
          resolve(res[0]);
        }
      });
    });
  };