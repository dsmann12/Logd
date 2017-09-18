const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      middleware = require('../middleware'),
      Rating = require('../models/rating'),
      User = require('../models/user'),
      Game = require('../models/game');

//router
router.get('/game/:gameId/user/:userId', (req, res) => {
    Rating.findOne({ game: req.params.gameId, user: req.params.userId}, (err, rating) => {
        if (err) {
            console.log(err);
        } else if (!rating) {
            res.json({
                success: false,
                msg: 'User has not rated game'
            });
        } else {
            res.json({
                success: true,
                msg: 'User has rated game',
                rating: rating
            });
        }
    });
});


// delete a rating
// check if authenticated
// check if rating.user._id === req.user._id
router.delete('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkRating], (req, res) => {
    // user find by id and remove
    Rating.findById(req.params.id, (err, rating) =>{
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        } else {
            rating.remove((err, result) => {
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

// change user to userId to be more clear
// same with game
// post a rating
// check if authenticated
// check if req.body.userId === req.user._id
router.post('/', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    const userId = req.user._id;
    const gameId = req.body.gameId;
    const ratingValue = req.body.rating;
    const date = req.body.date;

    //find user
    User.findOne({_id: userId}, (err, user) => {
        if (err) {
            console.log(err);
            //return err response
            res.json({
                success: false,
                msg: 'An error occurred'
            });
        } else if (!user) {
            //return user not found reponse
            res.json({
                success: false,
                msg: 'User not found'
            });
        } else {
            // user found
            Game.findOne({_id: gameId}, (err, game) => {
                if (err) {
                    console.log(err);
                    // return err reponse
                    res.json({
                        success: false,
                        msg: 'An error occurred'
                    });
                } else if (!game) {
                    // return game not found response
                    res.json({
                        success: false,
                        msg: 'Game not found'
                    });
                } else {
                    // game found
                    //find rating with game and user if it exists
                    Rating.findOne({
                        user: userId,
                        game: gameId
                    }, (err, rating) => {
                        if (err) {
                            console.log(err);
                            //return error response
                            res.json({
                                success: false,
                                msg: 'An error occurred'
                            });
                        } else if (!rating) {
                            // create new rating
                            rating = new Rating({
                                user: userId,
                                game: gameId,
                                rating: ratingValue,
                                date: date
                            });
                            user.ratings.push(rating);
                            game.ratings.push(rating);

                            // update game avgRating
                            // update game ratingsCount
                            // update user ratingsCount
                            game.avgRating = Game.addRatingAndCalculateAvg(game.avgRating, game.ratingsCount, ratingValue);
                            game.ratingsCount = game.ratingsCount + 1;
                            user.ratingsCount = user.ratingsCount + 1;

                            // possible failure point?
                            // only need to update user or game
                            // if rating pushed to them
                            user.save();
                            game.save();
                        } else {
                            console.log('Update: ', rating);
                            console.log("Game ratingsCount", game.ratingsCount);
                            console.log('Game avg rating', game.avgRating);
                            console.log('Rating value', ratingValue);
                            game.avgRating = Game.updateRatingAndCalculateAvg(game.avgRating, game.ratingsCount, rating.rating, ratingValue);
                            console.log('Game avg rating after', game.avgRating);

                            // update rating value
                            rating.rating = ratingValue;
                            game.save();
                        }

                        console.log('In ratings post route');
                    
                        // save rating
                        rating.save();
                        
                        res.json({
                            success: true,
                            msg: 'Rating updated',
                            rating: rating
                        });
                    });
                }
            });
        }
    });

});

module.exports = router;