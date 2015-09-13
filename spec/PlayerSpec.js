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
		weight: 62
	}

	beforeEach(function() {
		player = new Player(data);
	});

	it("first_name should be", function() {
		expect(player._first_name).toEqual('Alexis');
	});

	it("second_name should be", function() {
		expect(player._second_name).toEqual('Sánches');
	});

	it("height should be", function() {
		expect(player._height).toEqual(168);
	});

	it("weight should be", function() {
		expect(player._weight).toEqual(62);
	});

	it("birth_date should be", function() {
		expect(player._birth_date).toEqual(598492800000);
	});

	it("birth_place should be", function() {
		expect(player._birth_place).toEqual('Chile');
	});

	it("nationality should be", function() {
		expect(player._nationality).toEqual('Chile');
	});

	it("number should be", function() {
		expect(player._number).toEqual(17);
	});

	it("birth_place should be", function() {
		expect(player._position).toEqual('forward');
	});

	it("nationality should be", function() {
		expect(player._team).toEqual(undefined);
	});
});