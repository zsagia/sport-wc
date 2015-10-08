function Team(data) {
	this.id = data.id;
	this.club = data.club;
	this.name = data.name;
	this.players = data.players;
	this.trainers = data.trainers;
	this.season = data.season;
}

Team.prototype.toString = function() {
	return this.name;
};
};