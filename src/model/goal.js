function Goal(data) {
	this.id = data.id;
	this.date = data.date;
	this.setMatch(data.match);
	this.setPlayer(data.player);
}

Goal.prototype.getMatchTitle = function() {
	var match = this.match;
	var matchTitle;
	
	if (typeof match === 'string') {
		matchTitle = match;
	}
	else if (typeof match === 'object') {
		matchTitle = match.toString();
	}
};

Goal.prototype.getPlayerName = function() {
	var player = this.player;
	var playerName;

	if (typeof player === 'object') {
		playerName = player.getFullName();
	}
	else if (typeof player === 'string') {
		playerName = player;
	}

	return playerName;
};

Goal.prototype.toString = function() {
	var match = this.match;

	return this.getPlayerName() + ' ' + this.date + '. minutes' + ' ' + match.toString();
};

Goal.prototype.setMatch = function(value) {
	if (typeof value === 'string') {
		this.match = value;
	}
	else if (typeof value === 'number') {
		this.match = value;
	}
	else if (typeof value === 'object') {
		this.match = new Match(value);
	}
};

Goal.prototype.setPlayer = function(value) {
	if (typeof value === 'string') {
		this.player = value;
	}
	else if (typeof value === 'number') {
		this.player = value;
	}
	else if (typeof value === 'object') {
		this.player = new Player(value);
	}
};