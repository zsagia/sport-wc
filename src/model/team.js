function Team(data) {
	this.id = data.id;
	this.setClub(data.club);
	this.name = data.name;
	this.players = data.players;
	this.trainers = data.trainers;
	this.season = data.season;
}

Team.prototype.getClubName = function() {
	var club = this.club;
	var clubName;

	if (typeof club === 'string') {
		clubName = club;
	}
	else if (typeof club === 'object') {
		clubName = club.shortName;
	}

	return clubName;
};

Team.prototype.toString = function() {
	return this.name;
};

Team.prototype.setClub = function(value) {
	if (typeof value === 'string') {
		this.club = value;
	}
	else if (typeof value === 'number') {
		this.club = value;
	}
	else if (typeof value === 'object') {
		this.club = new Club(value);
	}
};