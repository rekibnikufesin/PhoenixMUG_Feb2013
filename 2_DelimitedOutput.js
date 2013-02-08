var kills = db.kills.find( { "kill._id": 
	{ $in: [ ObjectId("50acfd45712e8bc7832ea7cb"), ObjectId("50be5db5712edf9e420c216e"),ObjectId("50be5468712edf9e420c20b8") ] },fragdate: { $gte: new ISODate("2012-12-23 14:00-0700"), $lt: new ISODate("2012-12-23 22:00-0700") } 
} )


kills.forEach( function(a){
	var killedID = a.kill._id;
	var killedName = a.kill.displayname;
	var killDate = new Date();
	killDate = a.fragdate;
	var printMonth = killDate.getMonth() + 1;
	var printDate = printMonth + "/" + killDate.getDate() + "/" + killDate.getFullYear() + " " + killDate.getHours() + ":" + killDate.getMinutes();

	print(killedID + "\t" + killedName + "\t" + printDate);

});