const con = require('../db_connection');
const connection = con.getConnection();
connection.connect();
const express = require('express');
// Create a router instance
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('select * from user_details', (err, array, fields) => {
    res.send(array);
    if (err) {
      res.send({ fetch: 'failed' });
    } else {
      res.send({ fetch: 'success' });
    }
  });
});
module.exports = router;
