function Goal(data) {
	this.id = data.id;
	this.date = data.date;
	this.setMatch(data.match);
	this.setPlayer(data.player);
}

Goal.prototype.toString = function() {
	var player = this._player;
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

	return player.toString();
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