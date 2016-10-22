describe("Person tests", function() {	
	var person;

	beforeEach(function() {
		person = require('../models/')["Person"];
	});
  
	it('Check Jasmine is up and running!', function() {
		expect(true).toBe(true);
	});

	it('Should fetch tables', function  (done){
        person.create(
			{firstName: "Cooper", 
			lastName: "Dog", 
			street: "123 Somewhere St", 
			city: "Clermont", 
			state: "FL", 
			zip: "33026", 
			phone: "1234567890", 
			email: "cooper@dog.com"}
		).then(function  (){
            person.findOne({where: {firstName: "Cooper"}}).then(function  (row){
                console.log('row', row);
                done();
            });
        });

    });


})