/*
	constructor Table
*/
function Table(data) {

	if (this.dataIsMatches(data)) {
		this.setCompetition('2015/16');
		this.setMatches(data);

		this.rounds = this.doMatches(this.matches);
	}
	else if (this.dataIsSummarized(data)) {
		this.setCompetition(data.type + ' ' + data.season);

		this.rounds = this.doSummerized(data);
	}
}

/*
	function addPoints
*/
Table.prototype.addPoints = function(team, goalFor, goalAgainst) {
	team.goal_against += goalAgainst;
	team.goal_for += goalFor;
	team.played += 1;

	if (goalFor > goalAgainst) {
		team.points += 3;
		team.won += 1;
	}
	else if (goalFor == goalAgainst) {
		team.points += 1;
		team.drawn += 1;
	}
	else {
		team.lost += 1;
	}
};

/*
	function addPoints
*/
Table.prototype.cloneTeamRound = function(teamRound) {
	var object = {};

	Object.keys(teamRound).forEach(function(key){
		var object2 = {};
		var team = teamRound[key];

		Object.keys(team).forEach(function(key2) {
			object2[key2] = team[key2];
		});

		object[key] = object2;
	});

	return object;
};

/*
	function doMatches
*/
Table.prototype.doMatches = function(data) {
	var teamRounds = this.makeTeamRounds(data),
		rounds = [],
		sortingTeams = this.sortingTeams,
		teamPositions = {};


	Object.keys(teamRounds).forEach(function(key) {
		var teamRound = teamRounds[key];
		var round = [];

		Object.keys(teamRound).forEach(function(team) {
			round.push(teamRound[team]);
		});

		round.sort(sortingTeams);
		round.reverse();

		round.forEach(function(team, index) {
			var teamName = team.team_name,
				lastPosition = teamPositions[teamName] || 0;

			team.position = teamPositions[teamName] = index + 1;
			team.last_position = lastPosition;
		});

		rounds.push(round);
	});

	return rounds;
};

/*
	function doSummerized
*/
Table.prototype.doSummerized = function(data) {
	var teams = data.team_results;

	teams.forEach(function(team) {
		team.played = team.won + team.drawn + team.lost;
	});

	teams.sort(this.sortingTeams);
	teams.reverse();

	var rounds = [];

	rounds.push(teams);

	return rounds;
};

/*
	function getTableTitle
*/
Table.prototype.getTableTitle = function() {
	var competition = this.competition;
	var tableTitle;

	if (typeof competition === 'string') {
		tableTitle = competition;
	}
	else if (typeof competition === 'number') {
	}
	else if (typeof competition === 'object') {
		tableTitle = competition.toString();
	}

	return tableTitle;
};

/*
	function dataIsMatches
*/
Table.prototype.dataIsMatches = function(data) {
	return (typeof (data.length) == 'undefined') ? false : true;
};

/*
	function dataIsSummarized
*/
Table.prototype.dataIsSummarized = function(data) {
	return ((typeof data === 'object') && ((data instanceof Array) !== true)) ? true : false; 
};

/*
	function makeTeamRounds
*/
Table.prototype.makeTeamRounds = function(matches) {
	var teamRounds = {};

	for (var i = 0; i < matches.length; i++) {
		var match = matches[i];

		var team1Name = match.getHomeTeamName();
		var team2Name = match.getAwayTeamName();
		var round = match.round;

		var teamRound = teamRounds[round] || (teamRounds[round - 1] ? this.cloneTeamRound(teamRounds[round - 1]) : {});

		var team1 = teamRound[team1Name];

		if (!team1) {
			team1 = {
				drawn: 0,
				goal_against: 0,
				goal_for: 0,
				last_position: 0,
				lost: 0,
				played: 0,
				points: 0,
				team_name: team1Name,
				won: 0
			};
		}

		this.addPoints(team1, match.homeGoals, match.awayGoals);

		teamRound[team1Name] = team1;

		var team2 = teamRound[team2Name];

		if (!team2) {
			team2 = {
				drawn: 0,
				goal_against: 0,
				goal_for: 0,
				last_position: 0,
				lost: 0,
				played: 0,
				points: 0,
				team_name: team2Name,
				won: 0
			};
		}

		this.addPoints(team2, match.awayGoals, match.homeGoals);

		teamRound[team2Name] = team2;

		teamRounds[round] = teamRound;
	}

	return teamRounds;
};

/*
	function setCompetition
*/
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

/*
	function setMatches
*/
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

/*
	function sortingTeams
*/
Table.prototype.sortingTeams = function(team1, team2) {
	var pointsDifference = team1.points - team2.points;
	var team1GoalDifference;
	var team2GoalDifference = team2.goalFor - team2.goalAgainst;


	if (pointsDifference !== 0) {
		return pointsDifference;
	}
	else {
		team1GoalDifference = team1.goalFor - team1.goalAgainst;
		team2GoalDifference = team2.goalFor - team2.goalAgainst;

		if (team1GoalDifference !== team2GoalDifference) {
			return team1GoalDifference - team2GoalDifference;
		}
		else {
			return team1.goalFor - team2.goalFor;
		}
	}
};

/*
	function toString
*/
Table.prototype.toString = function() {
	var competition = this.competition;
	var separator = ' ';

	return getTableTitle();
};