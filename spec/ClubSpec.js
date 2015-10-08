describe("Club instance", function() {
	var club;
	var data = {
		id: 34567,
		established: 1892,
		logo: 'http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png',
		manager: 'Mauricio Pochettino',
		name: 'TOTTENHAM HOTSPUR FOOTBALL CLUB',
		nick_name: 'Spurs / Lilywhites',
		short_name: 'Tottanham Hotspurs',
		site: 'http://www.tottenhamhotspur.com/home'
	};

	beforeEach(function() {
		club = new Club(data);
	});

	it("established should be equal", function() {
		expect(club.established).toEqual(1892);
	});

	it("logo attribute should be equal", function() {
		expect(club.logo).toEqual('http://www.premierleague.com/content/dam/premierleague/shared-images/clubs/s/spurs/logo.png/_jcr_content/renditions/cq5dam.thumbnail.140.100.png');
	});

	it("manager should be equal", function() {
		expect(club.manager).toBe('Mauricio Pochettino');
	});

	it("name should be equal", function() {
		expect(club.name).toBe('TOTTENHAM HOTSPUR FOOTBALL CLUB');
	});

	it("nick_name should be equal", function() {
		expect(club.nickName).toBe('Spurs / Lilywhites');
	});

	it("short_name should be equal", function() {
		expect(club.shortName).toEqual('Tottanham Hotspurs');
	});

	it("site should be equal", function() {
		expect(club.site).toEqual('http://www.tottenhamhotspur.com/home');
	});

});