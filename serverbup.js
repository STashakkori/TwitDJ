//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var async = require('async');
var socketio = require('socket.io');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);

router.use(express.static(path.resolve(__dirname, 'client')));
var messages = [];
var sockets = [];

io.on('connection', function (socket) {
	messages.forEach(function (data) {
		socket.emit('message', data);
	    });

	sockets.push(socket);

	socket.on('disconnect', function () {
		sockets.splice(sockets.indexOf(socket), 1);
		updateRoster();
	    });

	socket.on('message', function (msg) {
		var text = String(msg || '');

		if (!text)
		    return;

		socket.get('name', function (err, name) {
			var data = {
			    name: name,
			    text: text
			};

			broadcast('message', data);
			messages.push(data);
		    });
	    });

	socket.on('identify', function (name) {
		socket.set('name', String(name || 'Anonymous'), function (err) {
			updateRoster();
		    });
	    });
    });

function updateRoster() {
    async.map(
	      sockets,
	      function (socket, callback) {
		  socket.get('name', callback);
	      },
	      function (err, names) {
		  broadcast('roster', names);
	      }
	      );
}

function broadcast(event, data) {
    sockets.forEach(function (socket) {
	    socket.emit(event, data);
	});
}

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
	var addr = server.address();
	console.log("Chat server listening at", addr.address + ":" + addr.port);
    });

var Twitter = require('twitter');
/**
    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    });
*/
var client = new Twitter({
	consumer_key: "TDNLSTTz8P9AVHnCgLyCw7pPZ",
	consumer_secret: "6W5NxEQEZRL9SFp1Nx2rKHg0dE1w3lGqKpiOpJe0eHDNorYSrB",
	access_token_key: "2844620313-2844620313-CaBkrSwj4jsWtXIEw2DhOHN1ZyZEBDLIcaQzyTN",
	access_token_secret: "ucaOKKi3dOEsPyXdPyW5OYBjxdR7MPOJYUNzptHi0A3Cb",
    });
    
/**
        TWITTER_CONSUMER_KEY = TDNLSTTz8P9AVHnCgLyCw7pPZ
        TWITTER_CONSUMER_SECRET = 6W5NxEQEZRL9SFp1Nx2rKHg0dE1w3lGqKpiOpJe0eHDNorYSrB
        TWITTER_ACCESS_TOKEN_KEY = 2844620313-2844620313-CaBkrSwj4jsWtXIEw2DhOHN1ZyZEBDLIcaQzyTN
        TWITTER_ACCESS_TOKEN_SECRET = ucaOKKi3dOEsPyXdPyW5OYBjxdR7MPOJYUNzptHi0A3Cb
*/
    
var params = {screen_name: 'tashakkoris'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
	    console.log(tweets);
	}
	console.log(response.body);
    });