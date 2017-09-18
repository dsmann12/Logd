const express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	passport = require('passport'),
	config = require('./config/database'),
	app = express();

//Connect To Database
mongoose.connect(config.database);

//On Connection 
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

//On Database Error
mongoose.connection.on('error', (err) => {
	console.log('Database Error ' + err);
});

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json({limit: '20mb'}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Users Route
const users = require('./routes/users');
const games = require('./routes/games');
const lists = require('./routes/lists');
const reviews = require('./routes/reviews');
const search = require('./routes/search');
const likes = require('./routes/likes');
const ratings = require('./routes/ratings');
const plays = require('./routes/plays');
app.use('/users', users);
app.use('/games', games);
app.use('/lists', lists);
app.use('/reviews', reviews);
app.use('/search', search);
app.use('/likes', likes);
app.use('/ratings', ratings);
app.use('/plays', plays);

app.use(express.static(__dirname + '/public'));

//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.listen(port, '0.0.0.0', () => {
	console.log('Server running!');
});
