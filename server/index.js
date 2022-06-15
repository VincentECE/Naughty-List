const express = require('express');
const app = express();
const morgan = require('morgan'); // logger
const rateLimit = require('express-rate-limit');
const router = require('./routes.js');
require('dotenv').config();
require('./db');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded());

app.use('/', router); // this sends stuff to the router

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});