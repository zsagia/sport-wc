function Venue(venue) {
	this.id = venue.id;
	this.name = venue.name;
	this.city = venue.city;
	this.country = venue.country;
	this.image = venue.image;
	this.built = venue.built;
	this.capacity = venue.capacity;
}

Venue.prototype.toString = function() {
	return this.name + ' - ' + this.city;
};