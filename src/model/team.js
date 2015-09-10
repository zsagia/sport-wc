function Team(data) {
	this._id = data.id;
	this._logo = data.logo;
	this._name = data.name;
	this._short_name = data.short_name;
}

Team.prototype.toString = function() {
	return this._name;
};