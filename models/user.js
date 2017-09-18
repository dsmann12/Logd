const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	avatar: String,
	bio: String,
	favorites: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Game'
		}
	],
	lists: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'List'
		}
	],
	played: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Play'
		}
	],
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Review'
		}
	],
	ratings: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Rating'
		}
    ],
	backlog: [
		{
			game : {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Game'
			}, 
			date: Date,
			_id: false
		}
	],
	likes: {
		games: [
			{	
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Like'
			}
		],
		reviews: [
			{	
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Like'
			}
		],
		lists: [
			{	
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Like'
			}
		]
	},
	log: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Review'
		}
	],
	gameLikesCount: {
		type: Number,
		default: 0
	},
	reviewLikesCount: {
		type: Number,
		default: 0
	},
	listLikesCount: {
		type: Number,
		default: 0
	},
	ratingsCount: {
		type: Number,
		default: 0
	},
	playedCount: {
		type: Number,
		default: 0
	},
	backlogCount: {
		type: Number,
		default: 0
	},
	logCount: {
		type: Number,
		default: 0
	},
	listsCount: {
		type: Number,
		default: 0
	},
	reviewsCount: {
		type: Number,
		default: 0
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
	const query = {username: username};
	User.findOne(query)
	.populate('favorites')
	.populate({ path: 'lists', populate: { path: 'games user'}, options: { sort: { date: -1}}})
	.populate({ path: 'played', populate: { path: 'game'}, options: { sort: { date: -1 }}})
	.populate({ path: 'reviews', populate: { path: 'game user'}, options: { sort: { 'date': -1}}})
	.populate({ path: 'ratings', populate: { path: 'game'}, options: { sort: { 'date': -1}}})
	.populate({ path: 'log', populate: { path: 'game' }, options: { sort: { 'logDate': -1 } } })
	.populate('backlog.game')
	.exec(callback);
}

module.exports.addUser = function(newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) {
				throw err;
			}
			else {
				newUser.password = hash;
				newUser.save(callback);
			}
		});
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) {
			throw err;
		}
		else {
			callback(null, isMatch);
		}
	});
}
