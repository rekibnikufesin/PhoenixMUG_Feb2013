var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var kill = new Schema({
	result: [KillsSchema],
	ok: { type: Number }
});


var KillsSchema = new Schema({
	_id: {
		displayname: { type: String },
		eventhour: { type: Number }
	},
	numKills: { type: Number }
});

module.exports = mongoose.model('kill', kill);