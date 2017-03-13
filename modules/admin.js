var q = require('q');
var util    = require('util');
var dateFormat = require('dateformat');
var mysqli = require('./mysqli');

exports.selectAllValue1 = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 5);
    var defered = q.defer();
    query =  mysql.query(strQuery,defered.makeNodeResolver());
    query.on('error',function(err){
    throw err;
    });
    
    return defered.promise;
}
exports.users = function(mysql,req, res)
{
    console.log(req.body.address.street);
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli,'users');
    var defered = q.defer();
    escape_data =[req.body.name,req.body.email,req.body.username,req.body.phone,req.body.address.street,req.body.address.city,req.body.address.zipcode];
    console.log(escape_data);
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());

    console.log(query.sql);

    query.on('error',function(err){
        throw err;
    });

    return defered.promise;
}

exports.users_update = function(mysql,req, res)
{
    console.log(req.body);
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli,'users_Update');
    var defered = q.defer();
    escape_data =[req.body.name,req.body.email,req.body.username,req.body.phone,req.body.address.street,req.body.address.city,req.body.address.zipcode,req.param('id')];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    console.log(query.sql);
    query.on('error',function(err){
        throw err;
    });

    return defered.promise;
}

exports.selectAllusers = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 5);
    var defered = q.defer();
    escape_data =[req.param('id')];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    console.log(query.sql);
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}
exports.selectuserbyid = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 'selectuserbyid');
    var defered = q.defer();
    escape_data =[req.param('id')];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    console.log(query.sql);
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}

exports.users_delete = function(req,mysql,q)
{
    $mysqli = {};
    strQuery = mysqli.mysqli($mysqli, 'users_delete');
    var defered = q.defer();
    escape_data =[req.param('id')];
    query =  mysql.query(strQuery,escape_data,defered.makeNodeResolver());
    console.log(query.sql);
    query.on('error',function(err){
        throw err;
    })
    return defered.promise;
}