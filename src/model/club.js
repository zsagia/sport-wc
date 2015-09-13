function Club(data) {
	this._id = data.id;
	this._established = data.established;
	this._logo = data.logo;
	this._manager = data.manager;
	this._name = data.name;
	this._nick_name = data.nick_name;
	this._short_name = data.short_name;
	this._site = data.site;
}

Club.prototype.toString = function() {
	return this._name;
};