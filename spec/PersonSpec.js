describe("Person instance", function() {
	var person;
	var data =  {
		id: 12345,
		first_name: 'Alexis',
		second_name: 'Sánches',
		height: 168,
		weight: 62,
		birth_date: 598492800000,
		birth_place: 'Chile',
		nationality: 'Chile'
	}

	beforeEach(function() {
		person = new Person(data);
	});

	it("first_name should be", function() {
		expect(person._first_name).toEqual('Alexis');
	});

	it("second_name should be", function() {
		expect(person._second_name).toEqual('Sánches');
	});

	it("height should be", function() {
		expect(person._height).toEqual(168);
	});

	it("weight should be", function() {
		expect(person._weight).toEqual(62);
	});

	it("birth_date should be", function() {
		expect(person._birth_date).toEqual(598492800000);
	});

	it("birth_place should be", function() {
		expect(person._birth_place).toEqual('Chile');
	});

	it("nationality should be", function() {
		expect(person._nationality).toEqual('Chile');
	});
});
