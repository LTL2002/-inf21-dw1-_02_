'use strict';
var sql = require('../utils/db.js');

exports.createMovie = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO movies (idmovies,name,duration,director,yearrec,idproducer,idcategory,idcountry) Values(?,?,?,?,?,?,?,?)", [body.idmovies, body.name, body.duration, body.director, body.yearrec, body.idproducer, body.idcategory, body.idcountry], function (err, res) {
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
exports.deleteMovie = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM movies WHERE idmovies = ?', [id], function (err, res) {
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
exports.retrieveMovie = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM movies WHERE idmovies = ?', [id], function (err, res) {
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
exports.retrieveMovies = function () {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM movies', function (err, res) {
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