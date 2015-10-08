function Match(data) {
	this.id = data.id;
	this.attendance = data.attendance;
	this.awayGoals = data.away_goals;
	this.setAwayTeam(data.away_team);
	this.date = data.date;
	this.homeGoals = data.home_goals;
	this.setHomeTeam(data.home_team);
	this.goals = data.goals;
	this.type = data.type;
	this.venue = data.venue;
}

Match.prototype.toString = function() {
	var away_club = this._away_team._club;
	var home_club = this._home_team._club;
	var separator = ' - ';

	return home_club._short_name + separator + away_club._short_name;
Match.prototype.setAwayTeam = function(value) {
	if (typeof value === 'string') {
		this.awayTeam = value;
	}
	else if (typeof value === 'number') {
		var awayTeamData = localStorage.getItem(value);

		if (awayTeamData) {
			this.awayTeam = new Team(JSON.parse(awayTeamData));
		}
		
	}
	else if (typeof value === 'object') {
		this.awayTeam = new Team(value);
	}
};

Match.prototype.setHomeTeam = function(value) {
	if (typeof value === 'string') {
		this.homeTeam = value;
	}
	else if (typeof value === 'number') {
		var homeTeamData = localStorage.getItem(value);

		if (homeTeamData) {
			this.homeTeam = new Team(JSON.parse(homeTeamData));
		}
	}
	else if (typeof value === 'object') {
		this.homeTeam = new Team(value);
	}
};