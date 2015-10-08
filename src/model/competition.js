function Competition(data) {
	this.id = data.id;
	this.league = data.league;
	this.season = data.season;
	this.clubs = data.clubs;
}

Competition.prototype.toString = function() {
	var separator = ' ';

	return this.league + separator + this.season;
};