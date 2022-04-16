const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create REST object of express
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Enables the cores
app.use(cors());

// import the fetch module
const fetch = require('./operations/fetch');
app.use('/fetch', fetch);

// import insert module
const insert = require('./operations/insert');
app.use('/insert', insert);

// import update module
const update = require('./operations/update');
app.use('/update', update);

// import update module
const del = require('./operations/delete');
app.use('/delete', del);

// Assign the port no
app.listen(8080);
console.log('Server Listening on 8080');
