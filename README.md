# sport-wc
Sport Web Components

Model:

# Club {
	- id:			      (Not required/Will be generated)
}

# Match {
  - id:			      An id which can be a Number or a String
	- attendance:	  A Number
	- away:			    A team id or a team name
	- awayScores:	  (Not required/scores)
	- home:			    A team object or team id or a team name
	- homeScores:	  (Not required/scores)
	- referee:		  (Not required) A referee object or referee id or a referee name
	- timestamp:	  A Number value
	- place: 		    A place object or a place id or a place name
	- scores:		    (Not required/homeScores and awayScores)
	- type:			    (Required) A String value
}

# Member {
	- id:			      (Not required/Will be generated)
	- name:			    (Required) A String value
	- birthday:		  (Not required) timestamp
}

# Score {
	- description:	(Not required) A String value
	- half:			    (Not required) Number
	- id:			      (Not required/Will be generated)
	- match:		    (Required)A match id or a match object
	- member:		    (Required) A member id or a member object
	- timestamp:	  (Required) A Number value
}

# Team {
	- id:			      (Not required/Will be generated)
}

# Venue {
	- id:			      (Not required/Will be generated)
}
