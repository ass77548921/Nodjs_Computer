const mysql = require('mysql2');

// create database connection
const pool = mysql.createPool({ 
    host:'forthesky.ddns.net', 
    user: 'root', 
    password: 'L77548921',
    database: 'db'
  })

module.exports = pool.promise();