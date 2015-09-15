function Table(data) {
	this._id = data.id;
	this._competition = data.competition;
	this._matches = data.matches;
}

Table.prototype.toString = function() {
	var competition = this._competition;
	var separator = ' ';

	return competition._league + separator + competition._season;
};