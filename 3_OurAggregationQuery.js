db.kills.aggregate(
	[
	{ $match: 
		{ "kill._id": 
		{ $in: 
			[ ObjectId("50acfd45712e8bc7832ea7cb"), 
			ObjectId("50be5db5712edf9e420c216e"), 
			ObjectId("50be5468712edf9e420c20b8") ] 
		}, 
		"fragdate": 
		{ $gte: new ISODate("2012-12-23 14:00-0700"), $lt: new ISODate("2012-12-23 22:00-0700") }
		}
	},
	{ $project:
		{"kill._id": 1, "kill.displayname": 1, "eventhour": { $hour: '$fragdate' } }
	},
	{ $group: 
		{ _id: 
			{ "displayname": '$kill.displayname',  "eventhour": '$eventhour'  },
			"numKills": { $sum: 1 } 
		} 
	},
	{ $sort: { numKills: -1 } }
	]
);