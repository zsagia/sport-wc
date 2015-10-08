function Goal(data) {
	this.id = data.id;
	this.date = data.date;
	this.match = data.match;
	this.player = data.player;
}

Goal.prototype.toString = function() {
	var player = this._player;

	return player.toString();
};