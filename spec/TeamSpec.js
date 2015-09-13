describe("Team instance", function() {
	var team;
	var data = {
		id: 23456,
		club: 34567,
		name: 'first team',
		players: {},
		season: {},
		trainers: {}
	};

	beforeEach(function() {
		team = new Team(data);
	});

	it("name should be" , function() {
		expect(team._name).toEqual('first team');
	});

});