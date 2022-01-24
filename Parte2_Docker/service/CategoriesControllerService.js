'use strict';
var sql = require('../utils/db.js');

exports.createCategory = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO categories (idcategory,category) Values(?,?)", [body.idcategory, body.category], function (err, res) {
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
exports.deleteCategory = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM categories WHERE idcategory = ?', [id], function (err, res) {
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
exports.retrieveCategory = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM categories WHERE idcategory = ?', [id], function (err, res) {
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
exports.retrieveCategories = function () {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM categories', function (err, res) {
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