function Match(data) {
	this.id = data.id;
	this.attendance = data.attendance;
	this.awayGoals = data.away_goals;
	this.awayTeam = data.away_team;
	this.date = data.date;
	this.homeGoals = data.home_goals;
	this.homeTeam = data.home_team;
	this.goals = data.goals;
	this.type = data.type;
	this.venue = data.venue;
}

Match.prototype.toString = function() {
	var away_club = this._away_team._club;
	var home_club = this._home_team._club;
	var separator = ' - ';

	return home_club._short_name + separator + away_club._short_name;
};