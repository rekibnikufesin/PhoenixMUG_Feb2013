var Result = require('../models/frags.js');
var ObjectId = require('mongoose').Types.ObjectId;

exports.index = function(req, res){
	Result.aggregate([
			{ $match: 
				{ "kill._id": 
					{ $in: 
						[ new ObjectId("50acfd45712e8bc7832ea7cb"), 
						new ObjectId("50be5db5712edf9e420c216e"), 
						new ObjectId("50be5468712edf9e420c20b8") ] 
					},
					"fragdate": 
						{ $gte: new Date("2012-12-23 14:00-0700"), $lt: new Date("2012-12-23 22:00-0700") }
				}
			},
			{ $project:
				{"kill._id": 1, "kill.displayname": 1, "eventhour": { $hour: '$fragdate' } }
			},
			{ $group: 
				{ _id: 
					{ "displayname": '$kill.displayname',  "eventhour": '$eventhour' }, 
					"numKills": { $sum: 1 } 
				} 
			},
			{ $sort: { "numKills": -1 } }
		], function(err, docs) {
			if(err) {
				console.log('Error: ' + err.message);
				docs = [];
			}
			res.render('index.html', { title: 'Mongo Aggregation', results:docs });
			console.log('Writing your db results');
			console.log(docs);
		});
}

