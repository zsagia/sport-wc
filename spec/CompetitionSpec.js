describe("Competition instance", function() {
	var competition;
	var data = {
		id: 34567,
		league: {id:23345},
		season: {id:34456},
		clubs: []
	};

	beforeEach(function() {
		competition = new Competition(data);
	});

	it("league should not be null", function() {
		expect(competition.league).not.toBeNull();
	});

	it("season should not be null", function() {
		expect(competition.season).not.toBeNull();
	});

	it("clubs not be null", function() {
		expect(competition.clubs).not.toBeNull();
	});

});