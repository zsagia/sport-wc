function Table(data) {
	this.id = data.id;
	this.competition = data.competition;
	this.matches = data.matches;
}

Table.prototype.toString = function() {
	var competition = this.competition;
	var separator = ' ';

	return competition._league + separator + competition._season;
};