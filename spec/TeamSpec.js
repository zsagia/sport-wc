describe("Team instance", function() {
	var team;
	var data = {
		id: 23456,
		club: 'LIVERPOOL FC',
		name: 'first team',
		players: {},
		season: {},
		trainers: {}
	};

	beforeEach(function() {
		team = new Team(data);
	});

	it("name should be" , function() {
		expect(team.name).toEqual('first team');
	});

	it("club should be a String" , function() {
		expect(typeof team.club === 'string').toEqual(true);
	});
});