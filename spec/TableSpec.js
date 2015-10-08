describe("Table instance", function() {
	var table;
	var data = {
		id: 34567,
		competition: new Competition({}),
		matches: []
	};

	beforeEach(function() {
		table = new Table(data);
	});

	it("competition should not be null", function() {
		expect(table.competition).not.toBeNull();
	});

	it("matches should not be null", function() {
		expect(table.matches).not.toBeNull();
	});
});