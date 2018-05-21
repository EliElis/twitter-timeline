var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
var cors = require('cors');
app.use(cors());
var twit = require('twitter')
	, twitter = new twit({
		consumer_key: 'RfD9DzLyOLNvi3GcgS0qhySXL'
		, consumer_secret: 'UKy60kiQ7n7KrQQj00yLcTReZkVyCXbedzuouPYlFNGetSWEpO'
		, access_token_key: '997477955361271808-aQ5koJrKxHnpQd5eIHljGa0wCZiRSeq'
		, access_token_secret: 'xLhX4t8fonBSFCcrqWqspsV5AYPMZd7YN2oE14oDy6P0o'
	});
app.post('/user', function (req, res, next) {
	var params = {
		screen_name: req.body.screen_name
		, count: 10
	};
	twitter.get('statuses/user_timeline', params, function (error, tweets, response) {
			if (!error) {
				res.send(tweets);
			}
		})
		//    res.send('received the data.');
});
app.listen(3001);
module.exports = app;