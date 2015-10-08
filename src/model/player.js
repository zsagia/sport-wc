function Player(data) {
	Person.call(this, data);

	this.image = data.image;
	this.number = data.number;
	this.position = data.position;
	this.team = data.team;
}

Player.prototype = Object.create(Person.prototype);

Player.prototype.constructor = Player;