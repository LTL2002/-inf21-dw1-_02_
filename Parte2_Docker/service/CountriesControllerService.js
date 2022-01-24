'use strict';
var sql = require('../utils/db.js');

exports.createCountry = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO countries (idcountry,countryname) Values(?,?)", [body.idcountry, body.countryname], function (err, res) {
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
exports.deleteCountry = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM countries WHERE idcountry = ?', [id], function (err, res) {
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
exports.retrieveCountry = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM countries WHERE idcountry = ?', [id], function (err, res) {
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
exports.retrieveCountries = function () {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM countries', function (err, res) {
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