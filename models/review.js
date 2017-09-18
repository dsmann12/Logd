const mongoose = require('mongoose');
const User = require('./user');
const Game = require('./game');

//Review Schema
//Associate User
const ReviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: {
        type: String,
        required: true
    },
    rating: Number,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game',
        required: true
    },
    likesCount: {
        type: Number,
        default: 0
    },
    logDate: Date,
    date: Date
});

ReviewSchema.post('remove', (review) => {
    User.findById(review.user, (err, user) => {
        Game.findById(review.game, (err, game) => {
            user.reviews.pull(review);
            game.reviews.pull(review);
            user.save();
            game.save();
        })
    })
});

const Review = module.exports = mongoose.model('Review', ReviewSchema);

module.exports.getReviewById = function(id, callback) {
    Game.findById(id, callback);
}

module.exports.addReview = function(review, callback) {
    game.save(callback);
}