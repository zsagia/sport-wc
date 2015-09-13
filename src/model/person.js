function Person(data) {
	this._id = data.id;
	this._first_name = data.first_name;
	this._second_name = data.second_name;
	this._nick_name = data.nick_name;
	this._height = data.height;
	this._weight = data.weight;
	this._birth_place = data.birth_place;
	this._birth_date = data.birth_date;
	this._nationality = data.nationality;
}

Person.prototype.toString = function() {
	return this._first_name + (this._nick_name ? this._nick_name : '') + this._second_name;
};