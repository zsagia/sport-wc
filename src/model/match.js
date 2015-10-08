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
	var separator = ' - ';

	return this.getHomeTeamName() + separator + this.getAwayTeamName();
};

Match.prototype.getHomeTeamName = function() {
	var team = this.homeTeam;
	var teamName;

	if (typeof team === 'string') {
		teamName = team;
	}
	else if (typeof team === 'object') {
		teamName = team.getClubName();
	}

	return teamName;
};

Match.prototype.getAwayTeamName = function() {
	var team = this.awayTeam,
		teamName;

	if (typeof team === 'string') {
		teamName = team;
	}
	else if (typeof team === 'object') {
		teamName = team.getClubName();
	}

	return teamName;
};

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