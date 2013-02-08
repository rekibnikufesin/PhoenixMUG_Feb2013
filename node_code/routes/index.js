
/*
 * GET home page.
 */
var routesFrags = require('../controllers/FragController')

module.exports.defineRoutes = function(app){
	app.get('/', routesFrags.index);


}
