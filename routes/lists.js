const express = require('express');
const router = express.Router();
const config = require('../config/database');
const middleware = require('../middleware');
const passport = require('passport');
const User = require('../models/user');
const Game = require('../models/game');
const List = require('../models/list');


//Get Lists
router.get('/', (req, res) => {
    List.find({}).populate('user', ['name', 'username', 'avatar']).populate('games')
    .exec((err, allLists) => {
        if(err) {
            console.log(err);
            throw err;
        }

        res.json(allLists);
    });
});

router.get('/recent/:page?', (req, res) => {
    const page = +req.params.page;
    // shouldn't user skip because it does not scale
    List.find({}).sort({ _id: -1 }).skip((page - 1) * 10).limit(10)
    .populate('user', ['name', 'username', 'avatar'])
    .populate('games')
    .exec((err, lists) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(lists);
        }
    });
});

router.get('/popular/:page?', (req, res) => {
    const page = +req.params.page;
    List.find({}).sort({ likesCount: -1}).skip((page - 1) * 10).limit(10)
    .populate('user', ['name', 'username', 'avatar'])
    .populate('games')
    .exec((err, lists) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            res.json(lists);
        }
    })
});

//get lists featuring specific game
router.get('/game/:id', (req, res) => {
    const id = req.params.id;
    List.find({games: {$in: [id]}}).populate('user', ['name', 'username']).populate('games').exec(
        (err, lists) => {
            if(err) {
                console.log(err);
                throw err;
            }

            res.json(lists);
        }
    );
});

//get list by id
router.get('/:id',
    (req, res) => {
        const id = req.params.id;
        List.getListById(id, 
            (err, list) => {
                if(err){
                    console.log(err);
                    throw err;
                }

                res.json(list);
            }
        );
    }
);

// post a list
// check if authenticated
// check if req.body.list.user === req.user._id
router.post('/', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn], (req, res) => {
    const list = new List({
        user: req.user._id,
        title: req.body.title,
        description: req.body.description,
        games: req.body.games,
        comments: req.body.comments,
        likes: req.body.likes
    });
    // get user
    User.findById(req.user._id, (err, user) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else if (!user) {
            console.log('User not found');
            res.json({
                success: false,
                msg: 'User not found'
            });
        } else {
            list.save();
            user.lists.push(list);
            user.save();
            Game.update(
                { _id: { $in: list.games } },
                { $push: { lists: list } },
                { multi: true},
                (err, response) => {
                    res.json({
                        success: true,
                        list: list
                    });
                }
            );
        }
    });
});

// update a list
// check if list.user._id === req.user._id
router.put('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkList], (req, res) => {
    const data = req.body;
    List.findByIdAndUpdate(req.params.id, { $set: data}, (err, list) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            // games in old list not in new list
            // must have list removed
            // has to use list._id because mongoose.
            // mongoose was getting title property instead _id
            // with just list selected
            Game.update(
                { _id: { $in: list.games, $nin: data.games } },
                { $pull: { lists: list._id } },
                { multi: true },
                (err, removeResponse) => {
                    if (err) {
                        console.log('in remove');
                        console.log(err);
                        res.json({
                            success: false,
                            msg: 'An error occurred',
                            error: err
                        });
                    } else {
                        Game.update(
                            { _id: { $in: data.games }, lists: { $ne: list} },
                            { $push: { lists: list } },
                            { multi: true},
                            (err, response) => {
                                if (err) {
                                    console.log('in update new games');
                                    console.log(err);
                                    res.json({
                                        success: false,
                                        msg: 'An error occurred',
                                        error: err
                                    });
                                }
                                res.json({
                                    success: true,
                                    list: list
                                });
                            }
                        );
                    }
                }
            );
        }
    });
});

// delete list
// check if authenticated
// check if list.user._id === req.user._id
router.delete('/:id', [passport.authenticate('jwt', {session:false}), middleware.isLoggedIn, middleware.checkList], (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                msg: 'An error occurred',
                error: err
            });
        } else {
            list.remove((err, result) => {
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
                        msg: 'List deleted',
                        obj: result
                    });
                }
            });
        }
    });
})

module.exports = router;;