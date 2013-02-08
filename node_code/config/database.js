var mongoose = require("mongoose");

module.exports.connect = function(app){
	app.set('database', 'frags');
	app.set('host', '127.0.0.1');

	app.set('url', 'mongodb://'+app.get('host')+'/'+app.get('database'));
	mongoose.connect(app.get('url'));
	console.log('Connected to mongo with URL: ' + app.get('url'));
}