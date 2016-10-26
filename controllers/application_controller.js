/*
 Here is where you create all the functions that will do the routing for your app,
 and the logic of each route.
 */

var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/pos');
});

module.exports = router;
