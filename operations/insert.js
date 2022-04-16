const con = require('../db_connection');
const connection = con.getConnection();
connection.connect();
const express = require('express');

// Create a router instance
const router = express.Router();

router.post('/', (req, res) => {
  const id = req.body.id;
  const user_id = req.body.user_id;
  const user_name = req.body.user_name;
  const contact_no = req.body.contact_no;

  connection.query(
    'insert into user_details values ("' +
      id +
      '","' +
      user_id +
      '", " ' +
      user_name +
      '", "' +
      contact_no +
      '")',
    (err, result) => {
      if (err) {
        res.send({ insert: 'failed' });
      } else {
        res.send({ insert: 'success' });
      }
    }
  );
});
module.exports = router;
