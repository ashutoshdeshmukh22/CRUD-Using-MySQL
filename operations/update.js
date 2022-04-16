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
    'update user_details set user_name="' +
      user_name +
      '", contact_no="' +
      contact_no +
      '" where user_id="' +
      user_id +
      '"',
    (err, result) => {
      if (err) {
        res.send({ Update: 'failed' });
      } else {
        res.send({ Update: 'success' });
      }
    }
  );
});
module.exports = router;

// UPDATE `user_details` SET `user_name` = 'Vishal Kale', `contact_no` = '9098656465' WHERE `user_details`.`id` = 7
