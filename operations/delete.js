const con = require('../db_connection');
const connection = con.getConnection();
connection.connect();
const express = require('express');

// Create a router instance
const router = express.Router();

router.post('/', (req, res) => {
  const user_id = req.body.user_id;
  const user_name = req.body.user_name;
  const contact_no = req.body.contact_no;

  connection.query(
    'delete from user_details where user_id="' + user_id + '"',
    (err, result) => {
      if (err) {
        res.send({ Delete: 'failed' });
      } else {
        res.send({ Delete: 'success' });
      }
    }
  );
});
module.exports = router;
