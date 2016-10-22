describe("Product transaction tests", function() {	
	var productTransaction;

	beforeEach(function() {
		productTransaction = require('../models/')["ProductTransaction"];
	});
  
	it('Check Jasmine is up and running!', function() {
		expect(true).toBe(true);
	});

	it('Should fetch tables', function  (done){
        productTransaction.create(
			{product_id: 12, 
			quantity: 1,
			transactionPrice: 3.5}
		).then(function  (){
            productTransaction.findOne({where: {ProductId: 12}}).then(function  (row){
                console.log('row', row);
                done();
            });
        });

    });


})