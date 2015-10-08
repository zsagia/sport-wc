describe("Match instance", function() {
	var match;

	var away_club = {
		id: 34568,
		established: 1892,
		logo: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/l/liverpool/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
		name: 'LIVERPOOL FOOTBALL CLUB',
		manager: 'Brendan Rodgers',
		nick_name: 'The Reds',
		short_name: 'Liverpool FC',
		site: 'http://www.liverpoolfc.com/'
	};

	var home_club = {
		id: 34567,
		established: 1892,
		logo: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
		manager: 'Mauricio Pochettino',
		name: 'TOTTENHAM HOTSPUR FOOTBALL CLUB',
		nick_name: 'Spurs / Lilywhites',
		short_name: 'Tottanham Hotspurs',
		site: 'http://www.tottenhamhotspur.com/home'
	};

	var away_team = {
		id: 23457,
		club: away_club,
		name: 'first team',
		players: {},
		season: {},
		trainers: {}
	};

	var home_team = {
		id: 23456,
		club:home_club,
		name: 'first team',
		players: {},
		season: {},
		trainers: {}
	};

	var venue = {
		built: 1909,
		country: 'UK',
		name: 'Old Trafford',
		city: 'Manchester',
		capacity: 75653
	};

	var data = {
		id: 1002,
		attendance: 40000,
		away_goals: 1,
		away_team: away_team,
		date: 1440757875,
		home_goals: 1,
		home_team: home_team,
		type: 'friendly',
		venue: new Venue(venue)
	};

	beforeEach(function() {
		match = new Match(data);
	});

	it("attendance should be" , function() {
		expect(match.attendance).toEqual(40000);
	});

	it("away_goals should be" , function() {
		expect(match.awayGoals).toEqual(1);
	});
	
	it("date should be" , function() {
		expect(match.date).toEqual(1440757875);
	});

	it("homeGoals should be" , function() {
		expect(match.homeGoals).toEqual(1);
	});

	it("type should be" , function() {
		expect(match.type).toEqual('friendly');
	});

	it("toString should be" , function() {
		expect(match.toString()).toEqual('Tottanham Hotspurs - Liverpool FC');
	});
	
	it("awayTeam should be" , function() {
		expect(typeof match.awayTeam === 'object').toEqual(true);
	});

	it("after a string setting away team should be" , function() {
		match.awayTeam = 'Liverpool FC';
		expect(typeof match.awayTeam === 'string').toEqual(true);
	});

});