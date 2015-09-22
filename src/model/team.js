function Team(data) {
	this._id = data.id;
	this._club = data.club;
	this._name = data.name;
	this._players = data.players;
	this._trainers = data.trainers;
	this._season = data.season;
}

Team.prototype.toString = function() {
	return this._name;
};