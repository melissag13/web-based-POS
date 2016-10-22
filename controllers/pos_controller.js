// Here is where you create all the functions that will do the routing for your app,
// and the logic of each route.

var express = require('express');
var router = express.Router();
var Person = require('../models/')["Person"];
var Customer = require('../models/')["Customer"];
var Employee = require('../models/')["Employee"];
var Product =  require('../models/')["Product"];
var Vendor = require('../models/')["Vendor"];
var ProductTransaction = require('../models/')["ProductTransaction"];
var Receipt =  require('../models/')["Receipt"];

var moment = require('moment');

// Redirect the root route '/' to /burgers
// router.get('/', function(req, res) {
// 	res.redirect('/burgers');
// });

// At the default /burgers route, use the burger model to retrieve all records
router.get('/', function(req, res) {
	Person.findAll()
	.then(function(person_data) {
		console.log(person_data);
		return res.render('index', {person_data})
	});
});

module.exports = router;