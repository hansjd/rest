// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/list', function(req, res){
	res.send('List of all children');
});

router.post('/create/:id', function(req, res){
	res.send('Create new child with id ' + req.params.id );
});

router.get('/read/:id', function(req, res){
	res.send('Read child with id ' + req.params.id);
});

router.put('/update/:id', function(req, res){
	res.send('Update child with id ' + req.params.id);
});

router.get('/delete/:id', function(req, res){
	res.send('Delete child with id ' + req.params.id);
});

// Return router
module.exports = router;