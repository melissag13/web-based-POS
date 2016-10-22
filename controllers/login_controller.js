var bcrypt = require('bcryptjs');
var login  = require('../models');
var express = require('express');
var router  = express.Router();

//this is the login_controller.js file
router.get('/new', function(req,res) {
	res.render('users/new');
});

router.get('/sign-in', function(req,res) {
	res.render('users/sign_in');
});

router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/')
  })
});


// login
router.post('/login', function(req, res) {
  login.person.findOne({
    where: {email: req.body.email}
  }).then(function(user) {

		if (user == null){
			res.redirect('/users/sign-in')
		}

		
		// Use bcrypt to compare the user's password input
		// with the hash stored in the user's row. 
		// If the result is true, 
    bcrypt.compare(req.body.password, employee.password_hash, function(err, result) {
      // if the result is true (and thus pass and hash match)
      if (result == true){

      	// save the user's information 
				// to req.session, as the comments below show 

				// we enter the user's session by setting properties to req.

				// we save the logged in status to the session
        req.session.logged_in = true;
        // the username to the session
				req.session.username = user.username;
				// the employee id to the session
        req.session.employee_id = employee.id;
        // and the user's email.
        req.session.person_email = person.email;

        res.redirect('/');
      }
      // if the result is anything but true (password invalid)
      else{
      	// redirect user to sign in
				res.redirect('/users/sign-in')
			}
    })
  })
});


// register a user
router.post('/create', function(req,res) {
	login.person.findAll({
    where: {email: req.body.email}
  }).then(function(users) {

		if (users.length > 0){
			console.log(users);
			res.send('we already have an email or username for this account')
		} else {

			// Using bcrypt, generate a 10-round salt,
			// then use that salt to hash the user's password.
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(req.body.password, salt, function(err, hash) {
					
					// Using the User model, create a new user,
					// storing the email they sent and the hash you just made
					login.person.create({
						email: req.body.email,
						password_hash: hash
					})
					// In a .then promise connected to that create method,
					// save the user's information to req.session
					// as shown in these comments
					.then(function(user){

						// we enter the user's session by setting properties to req.

						// we save the logged in status to the session
	          req.session.logged_in = true;
						// the user id to the session
	          req.session.employee_id = employee.id;
	          // and the user's email.
	          req.session.person_email = person.email;

	          // redirect to home on login
						res.redirect('/')
					})
				})
			})
		}
	})
});

module.exports = router;
