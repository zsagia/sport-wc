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
		club: new Club(away_club),
		name: 'first team',
		players: {},
		season: {},
		trainers: {}
	};

	var home_team = {
		id: 23456,
		club: new Club(home_club),
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
		away_team: new Team(away_team),
		date: 1440757875,
		home_goals: 1,
		home_team: new Team(home_team),
		type: 'friendly',
		venue: new Venue(venue)
	};

	beforeEach(function() {
		match = new Match(data);
	});

	it("attendance should be" , function() {
		expect(match._attendance).toEqual(40000);
	});

	it("away_goals should be" , function() {
		expect(match._away_goals).toEqual(1);
	});
	
	it("date should be" , function() {
		expect(match._date).toEqual(1440757875);
	});

	it("home_goals should be" , function() {
		expect(match._home_goals).toEqual(1);
	});

	it("type should be" , function() {
		expect(match._type).toEqual('friendly');
	});

	it("toString should be" , function() {
		expect(match.toString()).toEqual('Tottanham Hotspurs - Liverpool FC');
	});

});