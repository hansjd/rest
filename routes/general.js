// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/version', function(req, res){
	res.send('Version 0.0.1');
});

// Routes
router.get('/hello/:name', function(req, res){
	res.send('Hello ' + req.params.name);
});

// Return router
module.exports = router;
