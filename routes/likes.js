const express = require('express');
const router = express.Router();
const config = require('../config/database');
const passport = require('passport');
const middleware = require('../middleware');
const Like = require('../models/like');
const User = require('../models/user');
const Game = require('../models/game');
const Review = require('../models/review');
const List = require('../models/list');
const mongoose = require('mongoose');

//Get likes
router.get('/', (req, res) => {
    Like.find({}, (err, likes) => {
        if (err) {
            console.log(err);
        } else {
            res.json(likes);
        }
    });
});

// get gamelike
router.get('/game/:gameId/user/:userId', (req, res) => {
    // console.log('get like: game: ', req.params.gameId);
    // console.log('get like: user', req.params.userId);
    Like.findOne({ 
        game: mongoose.Types.ObjectId(req.params.gameId), 
        user: mongoose.Types.ObjectId(req.params.userId)
        // game: req.params.gameId,
        // user: req.params.userId
    }, (err, like) => {
        if (err) {
            console.log(err);
        } else if (!like) {
            // console.log('No like found');
            res.json(
                {
                    success: false,
                    msg: 'No like found'
                }
            );
        } else {
            console.log(like);
            res.json({
                success: true,
                msg: 'Like found!',
                like: like
            });
        }
    })
});

// get list like
router.get('/list/:listId/user/:userId', (req, res) => {
    Like.findOne({
        list: mongoose.Types.ObjectId(req.params.listId),
        user: mongoose.Types.ObjectId(req.params.userId)
    }, (err, like) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!like) {
            console.log('No like found');
            res.json({
                success: false,
                msg: 'No like found'
            });
        } else {
            res.json({
                success: true,
                msg: 'Like found',
                like: like
            });
        }
    });
});

// get review like
router.get('/review/:reviewId/user/:userId' , (req, res) => {
    Like.findOne({
        review: mongoose.Types.ObjectId(req.params.reviewId),
        user: mongoose.Types.ObjectId(req.params.userId)
    }, (err, like) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!like) {
            console.log('No like found');
            res.json({
                success: false,
                msg: 'No like found'
            });
        } else {
            res.json({
                success: true,
                msg: 'Like found',
                like: like
            });
        }
    });
});


// Create a game like
// check if authenticated
router.post('/game', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    // Get user
    User.findById(req.user._id, (err, user) => {
        // if error return success false
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        // if no user found, then return false
        } else if (!user) {
                res.json({
                    success: false,
                    msg: 'No user found'
                });
        } else {
            // Get game
            Game.findById(req.body.gameId, (err, game) => {
                // if error return false
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occurred',
                        error: err
                    });
                
                } else if (!game) {    
                    // if no game found, return false
                    res.json({
                        success: false,
                        msg: 'Game not found'
                    });

                } else {
                    
                    // Check if like already exists
                    Like.findOne({
                        game: mongoose.Types.ObjectId(req.body.gameId),
                        user: mongoose.Types.ObjectId(req.user._id)
                    }, (err, like) => {
                        // if error return false
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                msg: 'An error occurred',
                                error: err
                            });
                        
                        // if like not found, create new like
                        } else if (!like) {
                            // assign like to like object with info in request body
                            like = {
                                user: req.user._id,
                                game: req.body.gameId,
                                date: Date.now(),
                                kind: 'GameLike'
                            }

                            // create Like
                            Like.create(like, (err, like) => {
                                // if error return false
                                if (err) {
                                    console.log(err);
                                    res.json({
                                        success: false,
                                        msg: 'An error occurred',
                                        error: err
                                    });
                                
                                // else push like to user.likes.games
                                // push like to game.likes
                                // save like, user, and game 
                                // possible database error if a save fails
                                // return true and like object
                                } else {
                                    user.likes.games.push(like);
                                    user.gameLikesCount = user.gameLikesCount + 1;
                                    game.likes.push(like);
                                    game.likesCount = game.likesCount + 1;
                                    console.log(like);
                                    like.save();
                                    user.save();
                                    game.save();
                                    res.json({
                                        success: true,
                                        msg: 'Like created',
                                        like: like
                                    });
                                }
                            });
                        
                            // if like exists then return true and like object
                        } else {
                            res.json({
                                success: true,
                                msg: 'Like already exists',
                                like: like
                            });
                        }
                    });
                }
            });
        }
    });
});

// Create a list like
// check if authenticated
// check if req.body.userId === req.user._id
router.post('/list', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    // Get user
    User.findById(req.user._id, (err, user) => {
        // if error return success false
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        
        // if no user found, then return false
        } else if (!user) {
                res.json({
                    success: false,
                    msg: 'No user found'
                });
        } else {
            // Get list
            List.findById(req.body.listId, (err, list) => {
                // if error return false
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occurred',
                        error: err
                    });
                
                } else if (!list) {    
                    // if on game found, return false
                    res.json({
                        success: false,
                        msg: 'Game not found'
                    });

                } else {
                    // Check if like already exists
                    Like.findOne({
                        list: mongoose.Types.ObjectId(req.body.listId),
                        user: mongoose.Types.ObjectId(req.user._id)
                    }, (err, like) => {
                        // if error return false
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                msg: 'An error occurred',
                                error: err
                            });
                        
                        // if like not found, create new like
                        } else if (!like) {
                            // assign like to like object with info in request body
                            like = {
                                user: req.user._id,
                                list: req.body.listId,
                                date: Date.now(),
                                kind: 'ListLike'
                            }

                            // create Like
                            Like.create(like, (err, like) => {
                                // if error return false
                                if (err) {
                                    console.log(err);
                                    res.json({
                                        success: false,
                                        msg: 'An error occurred',
                                        error: err
                                    });
                                
                                // else push like to user.likes.games
                                // push like to game.likes
                                // save like, user, and game 
                                // possible database error if a save fails
                                // return true and like object
                                } else {
                                    user.likes.lists.push(like);
                                    user.listLikesCount = user.listLikesCount + 1;
                                    list.likes.push(like);
                                    list.likesCount = list.likesCount + 1;
                                    console.log(like);
                                    like.save();
                                    user.save();
                                    list.save();
                                    res.json({
                                        success: true,
                                        msg: 'Like created',
                                        like: like
                                    });
                                }
                            });
                        
                        // if like exists then return true and like object
                        } else {
                            res.json({
                                success: true,
                                msg: 'Like already exists',
                                like: like
                            });
                        }
                    });
                }
            });
        }
    });
});


// post review like
// check if authenticated
// check if req.body.userId === req.user._id
router.post('/review', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    // Get user
    User.findById(req.user._id, (err, user) => {
        // if error return success false
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        
        // if no user found, then return false
        } else if (!user) {
                res.json({
                    success: false,
                    msg: 'No user found'
                });
        } else {
            // Get list
            Review.findById(req.body.reviewId, (err, review) => {
                // if error return false
                if (err) {
                    res.json({
                        success: false,
                        msg: 'An error occurred',
                        error: err
                    });
                
                } else if (!review) {    
                    // if on game found, return false
                    res.json({
                        success: false,
                        msg: 'Game not found'
                    });

                } else {
                    // Check if like already exists
                    Like.findOne({
                        review: mongoose.Types.ObjectId(req.body.reviewId),
                        user: mongoose.Types.ObjectId(req.user._id)
                    }, (err, like) => {
                        // if error return false
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                msg: 'An error occurred',
                                error: err
                            });
                        
                        // if like not found, create new like
                        } else if (!like) {
                            // assign like to like object with info in request body
                            like = {
                                user: req.user._id,
                                review: req.body.reviewId,
                                date: Date.now(),
                                kind: 'ReviewLike'
                            }

                            // create Like
                            Like.create(like, (err, like) => {
                                // if error return false
                                if (err) {
                                    console.log(err);
                                    res.json({
                                        success: false,
                                        msg: 'An error occurred',
                                        error: err
                                    });
                                
                                // else push like to user.likes.games
                                // push like to game.likes
                                // save like, user, and game 
                                // possible database error if a save fails
                                // return true and like object
                                } else {
                                    user.likes.reviews.push(like);
                                    user.reviewLikesCount = user.reviewLikesCount + 1;
                                    review.likes.push(like);
                                    review.likesCount = review.likesCount + 1;
                                    console.log(like);
                                    like.save();
                                    user.save();
                                    review.save();
                                    res.json({
                                        success: true,
                                        msg: 'Like created',
                                        like: like
                                    });
                                }
                            });
                        
                        // if like exists then return true and like object
                        } else {
                            res.json({
                                success: true,
                                msg: 'Like already exists',
                                like: like
                            });
                        }
                    });
                }
            });
        }
    });
});


// delete a like
// check if authenticated
// check if like.user._id === req.user._id
router.delete('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkLike], (req, res) => {
    Like.findById(req.params.id, (err, like) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        } else if (!like) {
            console.log('No review found');
            res.json({
                success: false,
                msg: 'Like not found'
            });
        } else {
            like.remove((err, result) => {
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
                        msg: 'Rating deleted',
                        obj: result 
                    });
                }
            });
        }
    });
});

module.exports = router;
