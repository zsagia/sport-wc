function Player(data) {
	Person.call(this, data);

	this.image = data.image;
	this.number = data.number;
	this.position = data.position;
	this.setTeam(data.team);
}

Player.prototype = Object.create(Person.prototype);

Player.prototype.constructor = Player;

Player.prototype.setTeam = function(value) {
	if (typeof value === 'string') {
		this.team = value;
	}
	else if (typeof value === 'number') {
		this.team = value;
	}
	else if (typeof value === 'object') {
		this.team = new Team(value);
	}
};
