/*Modules*/
var querystring = require('querystring');
var fs = require('fs');
var express = require('express');
var app = express();

/*Routes*/
app.get('/', function(req, res){
	fs.readFile(__dirname + '/index.html', 'utf8', function(err, data){
		res.end(data);
	});
})
app.get('/img/:name', function(req, res){
	res.sendFile(__dirname + '/img/' + req.params.name);
})
app.get('/:name', function(req, res){
	fs.readFile(__dirname + '/' + req.params.name, 'utf8', function(err, data){
		res.end(data);
	});
})

/*Add new profile*/
app.post('/add-profile', function(req, res){
	var newProfile = '';
	req.on('data', function(data){
		newProfile += data;
	});
	req.on('end', function(){
		newProfile = querystring.parse(newProfile);
		fs.readFile(__dirname + '/profiles.json', function(err, data){
			if(err) throw err;
			var jsonFile = JSON.parse(data);
			jsonFile.push(newProfile);
			jsonFile = JSON.stringify(jsonFile);
			fs.writeFile(__dirname + '/profiles.json', jsonFile, function(err){
				if(err) throw err;
			});
		});
		res.redirect('/');
	});
})

/*Port*/
app.listen(8080);