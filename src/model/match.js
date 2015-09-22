function Match(data) {
	this._id = data.id;
	this._attendance = data.attendance;
	this._away_scores = data.away_scores;
	this._away_team = data.away_team;
	this._date = data.date;
	this._home_scores = data.home_scores;
	this._home_team = data.home_team;
	this._scores = data.scores;
	this._type = data.type;
	this._venue = data.venue;
}

Match.prototype.toString = function() {
	var away_club = this._away_team._club;
	var home_club = this._home_team._club;
	var separator = ' - ';

	return home_club._short_name + separator + away_club._short_name;
};