var express = require('express');
var router = express.Router();


var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())	return next();
	res.redirect('/');
}

module.exports = function(app, passport){

	//root / home / login / register / logout
	app.use('/', require('./routes/signup')(passport, isAuthenticated));
	
}
