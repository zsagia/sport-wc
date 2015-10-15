describe("Table instance", function() {
	var table;
	var data = [];
	var team;

	beforeEach(function() {
		table = new Table(data);
		team = {
			drawn: 0,
			goal_against: 0,
			goal_for: 0,
			lost: 0,
			played: 0,
			points: 0,
			team_name: 'test',
			won: 0
		};
	});

	it("competition should not be null", function() {
		expect(table.competition).not.toBeNull();
	});

	it("matches should not be null", function() {
		expect(table.matches).not.toBeNull();
	});

	it("dataIsMatches function should return true" , function() {
		expect(table.dataIsMatches([])).toEqual(true);
	});

	it("dataIsMatches function should return false" , function() {
		expect(table.dataIsMatches({})).toEqual(false);
	});

	it("dataIsSummarized function should return true" , function() {
		expect(table.dataIsSummarized({})).toEqual(true);
	});

	it("dataIsSummarized function should return false" , function() {
		expect(table.dataIsSummarized([])).toEqual(false);
	});

	it("addPoints function should work correctly in case of 0 - 0" , function() {
		table.addPoints(team, 0, 0);

		expect(team.played).toEqual(1);
		expect(team.drawn).toEqual(1);
		expect(team.won).toEqual(0);
		expect(team.lost).toEqual(0);
		expect(team.points).toEqual(1);
		expect(team.goal_against).toEqual(0);
		expect(team.goal_for).toEqual(0);
	});

	it("addPoints function should work correctly in case of 2 - 0" , function() {
		table.addPoints(team, 2, 0);

		expect(team.played).toEqual(1);
		expect(team.drawn).toEqual(0);
		expect(team.won).toEqual(1);
		expect(team.lost).toEqual(0);
		expect(team.points).toEqual(3);
		expect(team.goal_against).toEqual(0);
		expect(team.goal_for).toEqual(2);
	});

	it("addPoints function should work correctly in case of 1 - 3" , function() {
		table.addPoints(team, 1, 3);

		expect(team.played).toEqual(1);
		expect(team.drawn).toEqual(0);
		expect(team.won).toEqual(0);
		expect(team.lost).toEqual(1);
		expect(team.points).toEqual(0);
		expect(team.goal_against).toEqual(3);
		expect(team.goal_for).toEqual(1);
	});

	it("addPoints function should work correctly in case of 0 - 0, 2 - 0 and 1 - 3" , function() {
		table.addPoints(team, 0, 0);

		expect(team.played).toEqual(1);
		expect(team.drawn).toEqual(1);
		expect(team.won).toEqual(0);
		expect(team.lost).toEqual(0);
		expect(team.points).toEqual(1);
		expect(team.goal_against).toEqual(0);
		expect(team.goal_for).toEqual(0);

		table.addPoints(team, 2, 0);

		expect(team.played).toEqual(2);
		expect(team.drawn).toEqual(1);
		expect(team.won).toEqual(1);
		expect(team.lost).toEqual(0);
		expect(team.points).toEqual(4);
		expect(team.goal_against).toEqual(0);
		expect(team.goal_for).toEqual(2);

		table.addPoints(team, 1, 3);

		expect(team.played).toEqual(3);
		expect(team.drawn).toEqual(1);
		expect(team.won).toEqual(1);
		expect(team.lost).toEqual(1);
		expect(team.points).toEqual(4);
		expect(team.goal_against).toEqual(3);
		expect(team.goal_for).toEqual(3);
	});
});