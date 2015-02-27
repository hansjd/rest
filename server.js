// Dependencies
var express = require('express');
//var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var https = require('https');
var http = require('http');
var fs = require('fs');

// MongoDB
//mongoose.connect('mongoose://localhost/rest_test');

// Key and certification
var options = {
  key: fs.readFileSync('keys/kidsy-key.pem'),
  cert: fs.readFileSync('keys/kidsy-cert.pem')
};

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('', require('./routes/general'));
app.use('/children', require('./routes/children'));
app.use('/parents', require('./routes/parents'));
app.use('/pedagogues', require('./routes/pedagogues'));
app.use('/sleep', require('./routes/sleep'));
app.use('/meals', require('./routes/meals'));
app.use('/activities', require('./routes/activities'));

// Start server
var port = 1337;
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(1338);
http.createServer(app).listen(port);
//app.listen(port);
console.log('API is running on port ' + port);


