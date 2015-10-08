function Person(data) {
	this.id = data.id;
	this.firstName = data.first_name;
	this.secondName = data.second_name;
	this.nickName = data.nick_name;
	this.height = data.height;
	this.weight = data.weight;
	this.birthPlace = data.birth_place;
	this.birthDate = data.birth_date;
	this.nationality = data.nationality;
}

Person.prototype.toString = function() {
	return this.firstName + ' ' + (this.nickName ? this.nickName + ' ' : '') + this.secondName;
};

Person.prototype.getFullName = function() {
	return this.firstName + ' ' + this.secondName;
};