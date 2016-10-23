/* A) DEPENDENCY */
var bcrypt = require('bcrypt'); 

/* B) STORING A PASSWORD */
app.post('/login', function(req, res) {
	// INPUTS
	// ======
	// grab username from AJAX
	var employeeID = req.body.employeeID;
	// grab password from AJAX
	var password = req.body.password;

// hash the password bacon with a 10-round salt
bcrypt.hash('bacon', 10, function(err, hash) {
  // Store hash in your password DB
    var s = 'INSERT INTO employee VALUES (?, ?)';
	connection.query(s,[employeeID, hash], function(err, result) {
		// now we have access to the username and hash
		console.log(result.employeeID);
		console.log(result.hash);
	})
});



/* C) VERIFYING A USER'S PASSWORD */

// let's assume we're working with the api to log a user in
app.post("/login", function(req, res){

	// INPUTS
	// ======
	// grab username from AJAX
	var employeeID = req.body.employeeID;
	// grab password from AJAX
	var password = req.body.password;

	// QUERIES
	// =======
	// create a query to retrieve the hash from the username
	var s = 'SELECT hash FROM employee WHERE employeeID=?';

	// now run the query
	connection.query(s,[employeeID], function(err, result) {
		


		// BYCRYPT
		// =======
		// save the hash from the result of our query
  	var hash = result.hash;

  	// ENTER THE BCRYPT COMPARE FUNCTION
  	// compare user entry  with the hash we retrieved
		bcrypt.compare(password, hash, function(err, res) {
	    // if the password is true
	    if(res === true) {
				// you can make the site operate as intended for logged in users
				console.log('Hacker voice: "I\'m in."')
	    }
	    else {
	    	// otherwise, you can black access to parts of your site
	    	console.log('Hacker voice: "I\'m not in."')
	    }
		});
	});
});