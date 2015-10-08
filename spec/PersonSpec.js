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

	it("firstName should be", function() {
		expect(person.firstName).toEqual('Alexis');
	});

	it("secondName should be", function() {
		expect(person.secondName).toEqual('Sánches');
	});

	it("height should be", function() {
		expect(person.height).toEqual(168);
	});

	it("weight should be", function() {
		expect(person.weight).toEqual(62);
	});

	it("birthDate should be", function() {
		expect(person.birthDate).toEqual(598492800000);
	});

	it("birth_place should be", function() {
		expect(person.birthPlace).toEqual('Chile');
	});

	it("nationality should be", function() {
		expect(person.nationality).toEqual('Chile');
	});
});
