// Connect to mySQL database
const prop = require('./db_properties');
const mysql = require('mysql');

module.exports = {
  getConnection: () => {
    return mysql.createConnection(prop);
  },
};
