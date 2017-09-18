const mongoose = require('mongoose');
const User = require('./user');
const Game = require('./game');
const List = require('./list');
const Review = require('./review');

//Like Schema
const options = { discriminatorKey: 'kind'};

const likeSchema = mongoose.Schema({
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, options);

const Like = module.exports = mongoose.model('Like', likeSchema);

const gameLikeSchema = new mongoose.Schema({
    game: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Game',
        required: true
    }
}, options);

gameLikeSchema.post('remove', (like) => {
    console.log('Removed like ', like);
    User.findById(mongoose.Types.ObjectId(like.user), (err, user) => {
        Game.findById(mongoose.Types.ObjectId(like.game), (err, game) => {
            user.likes.games.pull(like);
            user.gameLikesCount = user.gameLikesCount - 1;
            game.likes.pull(like);
            game.likesCount = game.likesCount - 1;
            game.save();
            user.save();
        });
    });
});

// Game Like
const GameLike = Like.discriminator('GameLike', gameLikeSchema);


// Like Like Schema
const listLikeSchema = new mongoose.Schema({
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    }
}, options);

// After remove from database, remove from list and user
listLikeSchema.post('remove', (like) => {
    User.findById(mongoose.Types.ObjectId(like.user), (err, user) => {
        List.findById(mongoose.Types.ObjectId(like.list), (err, list) => {
            user.likes.lists.pull(like);
            user.listLikesCount = user.listLikesCount - 1;
            list.likes.pull(like);
            list.likesCount = list.likesCount - 1;
            user.save();
            list.save();
        });
    });
});

// List Like
const ListLike = Like.discriminator('ListLike', listLikeSchema);

const reviewLikeSchema = new mongoose.Schema({
    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        required: true
    }
}, options);

// after remove from database, remove from review and user
reviewLikeSchema.post('remove', (like) => {
    User.findById(mongoose.Types.ObjectId(like.user), (err, user) => {
        Review.findById(mongoose.Types.ObjectId(like.review), (err, review) => {
            user.likes.reviews.pull(like);
            user.reviewLikesCount = user.reviewLikesCount - 1;
            review.likes.pull(like);
            review.likesCount = review.likesCount - 1;
            user.save();
            review.save();
        });
    })
});

// Review Like
const ReviewLike = Like.discriminator('ReviewLike', reviewLikeSchema);