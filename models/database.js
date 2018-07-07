//*
const mysql = require('knex')({
  "client": "mysql",
  "connection": {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "1234",
    "database": "POI"
  }
});

/*/
const mysql = require('knex')({
  "client": "mysql",
  "connection": {
    "host": "localhost",
    "port": 32770,
    "user": "root",
    "password": "development",
    "database": "tonersales"
  }
});
//*/

module.exports = mysql;