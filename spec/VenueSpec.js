describe("Venue instance", function() {
	var venue;
	var data = {
		built: 1909,
		country: 'UK',
		name: 'Old Trafford',
		city: 'Manchester',
		capacity: 75653
	};

	beforeEach(function() {
		venue = new Venue(data);
	});

	it("should be built attribute 1909", function() {
		expect(venue._built).toEqual(1909);
	});

	it("id should be undefined", function() {
		expect(venue._id).toBe(undefined);
  });
});
