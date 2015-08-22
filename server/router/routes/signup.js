var express = require('express');
var router = express.Router();
//cookie for remember me
//var cookie = require('cookie');


module.exports = function (passport, isAuthenticated) {

	/* GET login page. */
	router.get('/', function(req, res) {
		// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/',
		failureFlash : true  
	}));

	/* GET Registration Page */
	router.get('/register', function(req, res){
		res.render('user/register',{ message: req.flash('message') });
	});

	/* Handle Registration POST */
	router.post('/register', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/register',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home/home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});


	return router;
}
