function Venue(venue) {
	this._id = venue.id;
	this._name = venue.name;
	this._city = venue.city;
	this._country = venue.country;
	this._built = venue.built;
	this._capacity = venue.capacity;
};

Venue.prototype.toString = function() {
	return this._name + ' - ' + this._city;
};