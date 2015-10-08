describe("Goal instance", function() {
	var goal;
	
	var player = {
		id: 12345,
		birth_date: 598492800000,
		birth_place: 'Chile',
		first_name: 'Alexis',
		height: 168,
		nationality: 'Chile',
		number: 17,
		position: 'forward',
		second_name: 'Sánches',
		weight: 62
	};
	
	var match = {
		id: 1002,
		attendance: 40000,
		away_goals: 1,
		away_team: 'Liverpool',
		date: 1440757875,
		home_goals: 1,
		home_team: 'Tottenham',
		type: 'friendly',
		venue: 'london'
	};

	var data = {
		id: 34567,
		match: new Match(match),
		player: new Player(player),
		date: 1442312355
	};

	beforeEach(function() {
		goal = new Goal(data);
	});

	it("date should be equal", function() {
		expect(goal.date).toEqual(1442312355);
	});

	it("player should not be null", function() {
		expect(goal.date).not.toBeNull();
	});
	
	it("player should not be undefined", function() {
		expect(goal.date).not.toBeUndefined();
	});

	it("match should not be null", function() {
		expect(goal.date).not.toBeNull();;
	});

	it("match should not be undefined", function() {
		expect(goal.date).not.toBeUndefined();
	});

});