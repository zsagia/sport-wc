function Table(data) {
	this.id = data.id;
	this.setCompetition(data.competition);
	this.setMatches(data.matches);
}

Table.prototype.setCompetition = function(value) {
	if (typeof value === 'string') {
		this.competition = value;
	}
	else if (typeof value === 'number') {
		this.competition = value;
	}
	else if (typeof value === 'object') {
		this.competition = new Competition(value);
	}
};

Table.prototype.setMatches = function(value) {
	if (value instanceof Array !== true) {
		this.matches = [];

		return;
	}

	var newArray = [];

	for (var i = 0; i < value.length; i++) {
		var v = value[i];
		
		if (typeof v === 'number') {
			var match = localStorage.getItem(v);

			if (match) {
				newArray.push(new Match(JSON.parse(match)));
			}
		}
		else if (typeof v === 'object') {
			newArray.push(new Match(v));

			localStorage.setItem(this.id, JSON.stringify(v));
		}
	}

	this.matches = newArray;
};

Table.prototype.getTableTitle = function() {
	var competition = this.competition;
	var tableTitle;

	if (typeof competition === 'string') {
		tableTitle = competition;
	}
	else if (typeof competition === 'number') {
	}
	else if (typeof competition === 'object') {
		tableTitle = competition.toString()
	}

	return tableTitle;
};

Table.prototype.toString = function() {
	var competition = this.competition;
	var separator = ' ';

	return getTableTitle();
};
};