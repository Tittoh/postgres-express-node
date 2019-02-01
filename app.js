const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// setup express app
const app = express();

// Log requests to the console
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}


// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application .
require('./server/routes')(app);

// Setup a default catch all route that sends a json message
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness'
}));

module.exports = app;