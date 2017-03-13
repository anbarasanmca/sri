var q = require('q');
var fs = require('fs');
var express = require('express');
var reload = require('reload');
var sprintf = require('sprintf').sprintf;
var async = require('async');
var app = express.Router();
var dateFormat = require('dateformat');
var mysqli = require('../modules/mysqli');

app.post('/users', function(req, res){
	var users = require('../modules/users');
	q.all([users.users(config.mysql,req, res)]).then(function(results){
		res.json({"userStatus":req.body});
	});
});

// Update user Details
app.post('/users_Update', function(req, res){
	var users = require('../modules/users');
	q.all([users.users_update(config.mysql,req, res)]).then(function(results){
		res.json({"userStatus":req.body});
	});
});

// Select all user list
app.get('/usersList',function(req,res)
{
	var users = require('../modules/users');
	q.all([users.selectAllusers(req,config.mysql,q)]).then(function(results){
		//console.log(results[0][0][0].street)
		res.json(results[0][0]);
	});
});

// Select particular user
app.get('/users/:id/todos',function(req,res)
{
	console.log(req.params.id);
	var users = require('../modules/users');
	q.all([users.selectuserbyid(req,config.mysql,q)]).then(function(results){
		res.json(results[0][0]);
	});
});

// Delete user details
app.get('/users_delete/:id/todos',function(req,res)
{
	console.log(req.params.id);
	var users = require('../modules/users');
	q.all([users.users_delete(req,config.mysql,q)]).then(function(results){
		res.json({"Status":"Successfully Deleted"});
	});
});

module.exports = app;