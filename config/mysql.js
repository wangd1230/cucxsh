var mysql = require('mysql');
var config = require('./db');
//
var onelib_pool = mysql.createPool(config.onelib);
exports.onelib_pool = onelib_pool;