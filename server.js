// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
//mongoose.connect('mongoose://localhost/rest_test');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('', require('./routes/api'));

// Start server
var port = 1337;
app.listen(port);
console.log('API is running on port ' + port);
