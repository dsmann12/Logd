const mongoose = require('mongoose');
const User = require('./user');
const Game = require('./game');

const RatingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    rating: {
        type: Number,
        required: true
    },
    date: Date
});

RatingSchema.post('remove', (rating) => {
    User.findById(rating.user, (err, user) => {
        user.ratings.pull(rating);
        Game.findById(rating.game, (err, game)=> {
            game.ratings.pull(rating);

            // recalculate game avgRating
            game.avgRating = Game.deleteRatingAndCalculateAvg(game.avgRating, game.ratingsCount, rating.rating);

            // decrement ratingsCount for game and user
            user.ratingsCount = user.ratingsCount - 1;
            game.ratingsCount = game.ratingsCount - 1;

            // save game and user
            game.save();
            user.save();
        });
    });
});

const Rating = module.exports = mongoose.model('Rating', RatingSchema);