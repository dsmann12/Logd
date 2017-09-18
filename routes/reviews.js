const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');
const Comment = require('../models/comment');
const Review = require('../models/review');
const Rating = require('../models/rating');
const User = require('../models/user');
const Game = require('../models/game');

//Get Reviews
router.get('/', (req, res) => {
    Review.find({}).populate('comments').populate('game').populate('user')
    .exec((err, allReviews) => {
        if(err) {
            console.log(err);
            throw err;
        }

        res.json(allReviews);
    });
});

router.get('/recent/:page?',(req, res) => {
    const page = +req.params.page;
    // shoudln't use skip because it does not scale
    Review.find({}).sort({ _id: -1 }).skip((page - 1) * 10).limit(10)
    .populate('comments').populate('game').populate('user')
    .exec((err, reviews) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        }
        res.json(reviews);
    });
});

router.get('/popular/:page?', (req, res) => {
    const page = +req.params.page;
    Review.find({}).sort({ likeCount: -1}).skip((page - 1) * 10).limit(10)
    .populate('comments').populate('game').populate('user')
    .exec((err, reviews) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(reviews);
        }
    });
});


// post a review
// check if authenticated
// check if review.user._id === req.user._id
router.post('/', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    const review = new Review({
        user: req.user._id,
        game: req.body.game,
        rating: req.body.rating,
        text: req.body.text,
        logDate: req.body.logDate,
        date: Date.now()
    });

    User.findById(review.user, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        } else if (!user) {
            res.json({
                success: false,
                msg: 'user not found'
            });
        } else {
            if (review.rating || review.logDate || review.text) {
                review.save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            success: false,
                            msg: 'Error creating review'
                        });
                    } else {
                        Game.findById(review.game, (err, game) => {
                            if (err) {
                                console.log(err);
                                res.json({
                                    success: false,
                                    msg: 'An error occurred'
                                });
                            } else if (!game) {
                                res.json({
                                    success: false,
                                    msg: 'Game not found'
                                });
                            } else {
                                if (review.logDate) {
                                    user.log.push(review);
                                }

                                user.reviews.push(review);
                                user.save();
                                game.reviews.push(review);
                                game.lastReviewed = review.date;
                                game.save();
                                res.json({
                                    response: true,
                                    msg: 'Review added',
                                    review: review
                                });
                            }
                        });
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: 'Review invalid'
                });
            }
        }
    });
});

router.get('/:id' , (req, res) => {
    Review.findById(req.params.id).populate('game').populate('user').exec((err, review) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!review) {
            console.log('No review found');
            res.json({
                success: false,
                msg: 'No review found'
            });
        } else {
            res.json({
                success: true,
                msg: 'Review found',
                review: review
            });
        }
    });
});

router.get('/game/:gameId/recent/:page?', (req, res) => {
    const gameId = req.params.gameId;
    const page = +req.params.page;
    Review.find({ game: gameId }).sort({ _id: -1}).skip((page - 1) * 10).limit(10)
    .populate('comments').populate('game').populate('user')
    .exec((err, reviews) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(reviews);
        }
    });
});

router.get('/game/:gameId/popular/:page?', (req, res) => {
    const gameId = req.params.gameId;
    const page = +req.params.page;
    Review.find({ game: gameId }).sort({ likesCount: -1}).skip((page - 1) * 10).limit(10)
    .populate('comments').populate('game').populate('user')
    .exec((err, reviews) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(reviews);
        }
    });
});

// delete review
// check if authenticated
// check if review._id === req.user._id
router.delete("/:id", (req, res) => {
    console.log(req);
    Review.findById(req.params.id, (err, review) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!review) {
            console.log('No review found');
            res.json({
                success: false,
                msg: 'No review found'
            });
        } else {
            review.remove((err, result) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: 'An error occurred',
                        error: err
                    });
                } else {
                    res.json({
                        success: true,
                        msg: 'Review deleted',
                        obj: result
                    });
                }
            });
        }
    });
});

// update review
// check if authenticated
// check if review.user._id === req.user._id
router.put('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkReview], (req, res) => {
    const newData = { rating: req.body.rating, text: req.body.text, logDate: req.body.logDate };
    Review.findByIdAndUpdate(req.params.id, { $set: newData }, (err, review) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json({
                success: true,
                msg: 'Review updated',
                review: review
            });
        }
    });
});

module.exports = router;