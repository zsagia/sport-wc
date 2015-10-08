describe("Player instance", function() {
	var player;
	var data =  {
		id: 12345,
		birth_date: 598492800000,
		birth_place: 'Chile',
		first_name: 'Alexis',
		height: 168,
		nationality: 'Chile',
		number: 17,
		position: 'forward',
		second_name: 'Sánches',
		team: 'Arsenal',
		weight: 62
	}

	afterEach(function() {
		player = null;
	});

	beforeEach(function() {
		player = new Player(data);
	});

	it("firstName should be", function() {
		expect(player.firstName).toEqual('Alexis');
	});

	it("secondName should be", function() {
		expect(player.secondName).toEqual('Sánches');
	});

	it("height should be", function() {
		expect(player.height).toEqual(168);
	});

	it("weight should be", function() {
		expect(player.weight).toEqual(62);
	});

	it("birth_date should be", function() {
		expect(player.birthDate).toEqual(598492800000);
	});

	it("birth_place should be", function() {
		expect(player.birthPlace).toEqual('Chile');
	});

	it("nationality should be", function() {
		expect(player.nationality).toEqual('Chile');
	});

	it("number should be", function() {
		expect(player.number).toEqual(17);
	});

	it("birth_place should be", function() {
		expect(player.position).toEqual('forward');
	});

	it("nationality should be", function() {
		expect(player.team).toEqual('Arsenal');
	});
});