function Match(data) {
	this._id = data.id;
	this._attendance = data.attendance;
	this._away_goals = data.away_goals;
	this._away_team = data.away_team;
	this._date = data.date;
	this._home_goals = data.home_goals;
	this._home_team = data.home_team;
	this._goals = data.goals;
	this._type = data.type;
	this._venue = data.venue;
}

Match.prototype.toString = function() {
	var away_club = this._away_team._club;
	var home_club = this._home_team._club;
	var separator = ' - ';

	return home_club._short_name + separator + away_club._short_name;
};