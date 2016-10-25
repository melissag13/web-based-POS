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

// Default route, won't really display people, just wanted to have it do /something/
router.get('/', function(req, res) {
	Person.findAll()
	.then(function(person_data) {
		//console.log(person_data);
		return res.render('index', {person_data: person_data, logged_in: req.session.logged_in, email: req.session.username, employee_id: req.session.employee_id})
	});
});

router.post('/add', function(req, res) {
	console.log(req.body.productUPCsku);
	Product.findOne({where: {}})
})


module.exports = router;

