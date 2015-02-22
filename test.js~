var Twitter = require('twitter');

/**
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });*/

// Twitter shit
var client = new Twitter({
	consumer_key : "TDNLSTTz8P9AVHnCgLyCw7pPZ",
	consumer_secret : "6W5NxEQEZRL9SFp1Nx2rKHg0dE1w3lGqKpiOpJe0eHDNorYSrB",
	access_token_key : "2844620313-CaBkrSwj4jsWtXIEw2DhOHN1ZyZEBDLIcaQzyTN",
	access_token_secret : "ucaOKKi3dOEsPyXdPyW5OYBjxdR7MPOJYUNzptHi0A3Cb"
    })

    var numusers = 30;

var params = {screen_name: 'tashakkoris'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
	    console.log(tweets);
	}
	console.log(response.body);
    });

