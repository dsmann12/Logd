const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      middleware = require('../middleware'),
      Play = require('../models/play'),
      User = require('../models/user'),
      Game = require('../models/game');

router.get('/', (req, res) => {
    Play.find({}, (err, plays) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(plays);
        }
    });
});

router.get('/game/:gameId/user/:userId', (req, res) => {
    Play.findOne({
        game: req.params.gameId,
        user: req.params.userId
    }, (err, play) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!play) {
            res.json({
                success: false,
                msg: 'No play found'
            });
        } else {
            res.json({
                success: true,
                play: play
            });
        }
    });
});

// post a play
// check if authenticated
// check if req.body.userId === req.user._id
router.post('/', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    User.findById(req.user._id, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!user) {
            res.json({
                success: false,
                msg: 'No user found'
            });
        } else {
            Game.findById(req.body.gameId, (err, game) => {
                if (err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: 'An error occurred',
                        error: err
                    });
                } else if (!game) {
                    res.json({
                        success: false,
                        msg: 'No game found'
                    });
                } else {
                    Play.findOne({
                        user: req.user._id,
                        game: req.body.gameId
                    }, (err, play) => {
                        if (err) {
                            console.log(err);
                            res.json({
                                success: false,
                                msg: 'An error occurred',
                                error: err
                            });
                        } else if (!play) {
                            play = new Play({
                                user: req.user._id,
                                game: req.body.gameId,
                                date: Date.now()
                            });

                            user.played.push(play);
                            game.played.push(play);
                            user.playedCount = user.playedCount + 1;
                            game.playedCount = game.playedCount + 1;
                            user.save();
                            game.save();
                            play.save();
                        }

                        console.log('Play posting!');

                        res.json({
                            success: true,
                            msg: 'Play posted',
                            play: play
                        });
                    });
                }
            });
        }
    });
});


// delete a play
// check if authenticated
// check if play.user._id === req.user._id
router.delete('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkPlay], (req, res) => {
    Play.findById(req.params.id, (err, play) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!play) {
            res.json({
                success: false,
                msg: 'No play found'
            });
        } else {
            play.remove((err, result) => {
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
                        msg: 'Play deleted',
                        obj: result
                    });
                }
            });
        }
    });
});

module.exports = router;