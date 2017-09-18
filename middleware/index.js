const passport = require('passport');
const User = require('../models/user');
const Play = require('../models/play');
const Rating = require('../models/rating');
const Review = require('../models/review');
const List = require('../models/list');
const Like = require('../models/like');

module.exports = {
    isLoggedIn: function(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } 
        
        // else {
        //     res.json({
        //         sucess: false,
        //         msg: 'Unauthorized'
        //     });
        // }
        
    },
    checkAvatar: function(req, res, next) {
        User.find({ username: req.body.user }, (err, user) => {
            console.log('User in avatar middleware', user);
            console.log('Req body', req.body.user);
            next();
        });
    },
    checkUser: function(req, res, next) {
        if (req.params.id === req.user._id.toString()) {
            next();
        } else {
            res.json({
                success: false,
                msg: 'You are unauthorized to perform this action'
            });
        }
    },
    checkMaster: function(req, res, next) {

    },
    checkPlay: function(req, res, next) {
        Play.findById(req.params.id, (err, play) => {
            console.log(play.user);
            if (req.user._id.toString() === play.user.toString()) {
                next();
            } else {
                res.json({
                    success: false,
                    msg: 'You are unauthorized to perform this action'
                });
            }
        });
    },
    checkRating: function(req, res, next) {
        Rating.findById(req.params.id, (err, rating) => {
            if (req.user._id.toString() === rating.user.toString()) {
                next();
            } else {
                res.json({
                    success: false,
                    msg: 'You are unauthorized to perform this action'
                })
            }
        });
    },
    checkReview: function(req, res, next) {
        Review.findById(req.params.id, (err, review) => {
            if (req.user._id.toString() === review.user.toString()) {
                next();
            } else {
                res.json({
                    success: false,
                    msg: 'You are unauthorized to perform this action'
                });
            }
        })
    },
    checkList: function(req, res, next) {
        List.findById(req.params.id, (err, list) => {
            if (req.user._id.toString() === list.user.toString()) {
                next();
            } else {
                res.json({
                    success: false,
                    msg: 'You are unauthorized to perform this action'
                });
            }
        })
    },
    checkLike: function(req, res, next) {
        Like.findById(req.params.id, (err, like) => {
            if (req.user._id.toString() === like.user.toString()) {
                next()
            } else {
                res.json({
                    success: false,
                    msg: 'You are unauthorized to perform this action'
                });
            }
        });
    }

}