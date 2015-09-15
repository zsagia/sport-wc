function Competition(data) {
	this._id = data.id;
	this._league = data.league;
	this._season = data.season;
	this._clubs = data.clubs;
}

Competition.prototype.toString = function() {
	var separator = ' ';

	return this._league + separator + this._season;
};