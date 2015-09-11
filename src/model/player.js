function Player(data) {
	Person.call(this, data);

	this._number = data.number;
	this._team = data.team;
	this._position = data.position;
}

Player.prototype = Object.create(Person.prototype);

Player.prototype.constructor = Player 