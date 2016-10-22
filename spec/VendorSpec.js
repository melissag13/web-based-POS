describe("Vendor tests", function() {
	var Vendor = require('../models/')["Vendor"];
	var vendor;

	beforeEach(function() {
		vendor = new Vendor();
	});
  

	it("A Vendor can have one or many products", function() {
		vendor.create()
	})
})