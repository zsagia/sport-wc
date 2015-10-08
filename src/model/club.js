function Club(data) {
	this.id = data.id;
	this.established = data.established;
	this.logo = data.logo;
	this.manager = data.manager;
	this.name = data.name;
	this.nickName = data.nick_name;
	this.shortName = data.short_name;
	this.site = data.site;
}

Club.prototype.toString = function() {
	return this.name;
};