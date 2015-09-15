function Score(data) {
	this._id = data.id;
	this._match = data.match;
	this._player = data.player;
	this._date = data.date;
}

Score.prototype.toString = function() {
	var player = this._player;

	return player.toString();
};