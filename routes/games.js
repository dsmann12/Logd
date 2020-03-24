const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      User = require('../models/user'),
      Game = require('../models/game'),
      igdb = require('igdb-api-node').default,
      apicalypse = require('apicalypse').default;

/*

/games              GET     INDEX
/games/new          GET     NEW
/games              POST    CREATE
/games/:id          GET     SHOW
/games/:id/edit     GET     EDIT
/games/:id          PUT     UPDATE
/games/:id          DELETE  DELETE


Get Popular Games
/games/popular/week

Search Games

/games/search/:query


*/

//Set up IGDB API Key
// const client = igdb('IqIxOdRhXHmshZdaZo4CBtUFWq96p1Jn5OIjsnzFkhJ9sm8b04');
const client = igdb('7677923721164db9824d6bc5d1ebae5b');
const requestOptions = {
    // queryMethod: 'url',
    queryMethod: 'body',
    baseURL: 'https://api-v3.igdb.com',
    headers: {
        accept : 'application/json',
        'user-key': config.igdb_key,
    },
    responseType: 'json',
    timeout: 10000, // 1 second timeout
};

//Get Games
router.get('/', (req, res) => {
    Game.find({}, 
        (err, allGames) => {
            if(err) {
                console.log(err);
                throw err;
            }

            res.json(allGames);
        }
    );
});

router.get('/popular', (req, res) => {
    Game.find({}).sort({ likesCount: -1 }).exec((err, games) => {
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
                games: games
            });
        }
    });
});

router.get('/just-reviewed', (req, res) => {
    Game.find({}).sort({ lastReviewed: -1}).exec((err, games) => {
        if (err) {
            console.log(err);
        } else {
            res.json(games);
        }
    })
});

//Get Game Information For Specific Game With IGDB ID
router.get('/igdb/:id', (req, res, next) => {
    const id = req.params.id;
    Game.findOne({id: id})
    .populate({ path: 'reviews', populate : { path: 'game user'}, options: { sort: {'date': -1 }}})
    .populate({ path: 'lists', populate: { path: 'user games'}, options: { sort: { 'likesCount': -1}}})
    .exec((err, game) => {
        if(err) {
            console.log(err);
            throw err;
        } else if (!game) {
            //create game
            // client.games(
            //     {ids: [id]},
            //     ['name', 'cover', 'developers', 'publishers', 'summary', 'first_release_date']
            // ).then((response) => {
            apicalypse(requestOptions)
                .fields('name, summary, cover.image_id, first_release_date, genres.name, involved_companies.company.*, involved_companies.developer, involved_companies.publisher, platforms.*')
                .where(`id = ${id}`)
                .limit(1)
                .request("/games")
                .then((response) => {
                const obj = response.data[0];
                const date = new Date(obj.first_release_date * 1000);
                game = new Game({
                    id: obj.id,
                    name: obj.name,
                    summary: obj.summary,
                    release: {
                        date: date,
                        year: date.getFullYear(),
                        month: date.getMonth() + 1,
                        day: date.getDate()
                    },
                    // cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + obj.cover.cloudinary_id + '.jpg',
                    cover: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/' + obj.cover.image_id + '.jpg',
                    // thumbnail: 'https://images.igdb.com/igdb/image/upload/t_cover_small_2x/' + obj.cover.cloudinary_id + '.jpg',
                    thumbnail: 'https://images.igdb.com/igdb/image/upload/t_cover_small_2x/' + obj.cover.image_id + '.jpg',
                    avgRating: 0,
                    ratings: [],
                    reviews: [],
                    lists: [],
                    developers: [],
                    publishers: [],
                });
                obj.involved_companies.forEach((company) => {
                    if (company.developer) {
                        game.developers.push({id: company.company.id, name: company.company.name});
                    }

                    if (company.publisher) {
                        game.publishers.push({id: company.company.id, name: company.company.name});
                    }
                });
                game.save((err) => {
                    if (err) {
                        console.log(err);
                        res.json({
                            success: false,
                            msg: 'An error occurred',
                            error: err
                        });
                    } else {
                        let graph = {
                            max: 0,
                            ratings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        };

                        Game.aggregate([
                            { $match: { name: game.name }},
                            { $addFields: { graph: graph }}
                        ], (err, updatedGame) => {
                            const opts = [
                                { path: 'reviews', populate : { path: 'game user'}, options: { sort: {'date': -1 }}},
                                { path: 'lists', populate: { path: 'user games'}, options: { sort: { 'likesCount': -1}}}
                            ]
                            Game.populate(updatedGame[0], opts, (err, populatedUser) => {
                                res.json(updatedGame[0]);
                            });
                        });
                    }
                });
            });
        } else {
            Game.aggregate([ 
                { $match: { name: game.name, ratings: { $exists: true, $ne: []} } }, 
                { $unwind: "$ratings" }, 
                { $lookup: { 
                    from: "ratings", 
                    localField: "ratings", 
                    foreignField: "_id", 
                    as: "ratingObj"} 
                },
                { $unwind: '$ratingObj'},
                { $group: { _id: "$ratingObj.rating", count: { $sum: 1} }},
                { $sort : { count: -1}},
            ], (err, result) => {
                if (err) {
                    console.log("ERROR:\n");
                    console.log(err);
                }
                let graph = {
                    max: 0,
                    ratings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                };
                
                if (result.length > 0) {
                    graph.max = (result[0]._id * 2) - 1;

                    result.forEach((element) => {
                        graph.ratings[(element._id * 2) - 1] = element.count;
                    })
                } 
                
                Game.aggregate([
                    { $match: { name: game.name }},
                    { $addFields: { graph: graph }},
                ], (err, updatedGame) => {
                    const opts = [
                        { path: 'reviews', populate : { path: 'game user'}, options: { sort: {'date': -1 }}},
                        { path: 'lists', populate: { path: 'user games'}, options: { sort: { 'likesCount': -1}}}
                    ]
                    Game.populate(updatedGame, opts, (err, populatedUser) => {
                        res.json(updatedGame[0]);
                    });
                });
            });
        }
    });
});


// staff picks
router.get('/staff', (req, res) => {
    Game.find({id: { $in: [2207, 73, 233, 1352, 71, 1009]}}, 
        (err, response) => {
            if (err) {
                console.log(err);
                throw err;
            }
            res.json(response);
        }
    );
});

router.get('/search', (req, res) => {
    client.games(
        {ids: [73, 1352, 1009]},
        ['name', 'cover', 'developers', 'publishers', 'summary', 'release_dates']
    ).then(
        (games) => {
            res.json(games);
        }
    )
});

router.get('/decade/:decade/:page?', (req, res) => {
    const decade = +req.params.decade;
    const page = +req.params.page;
    // console.log(apicalypse);
    // console.log('Page is', page);
    let offset = 0;
    if (page) {
        offset = 50 * (page - 1);
    }
    // const start = (decade - 1) + '-12-31';
    // const end = (decade + 10) + '-01-01';
    const start_date = new Date((decade-1), 11, 31);
    const end_date = new Date((decade+10), 0, 1);
    // console.log(start_date.valueOf()/1000);
    // console.log(end_date.valueOf()/1000);
    apicalypse(requestOptions)
        .fields('name, summary, rating, rating_count, cover.image_id, first_release_date, genres.name, involved_companies.company.*, involved_companies.developer, involved_companies.publisher, platforms.*')
        .where(`first_release_date > ${start_date.valueOf()/1000} & first_release_date < ${end_date.valueOf()/1000} & parent_game = null & rating_count > 0`)
        .limit(50)
        .offset(offset)
        .sort('rating_count', 'desc')
        .request("/games")
    // console.log(start);
    // console.log(end);
    // client.games({
    //     filters: {
    //         'first_release_date-gt' : start,
    //         'first_release_date-lt': end,
    //         'cover-exists': true
    //     },
    //     limit: 50,
    //     offset: offset,
    //     order: 'rating_count:desc'
    // }, [
    //     'name',
    //     'cover',
    //     'developers',
    //     'publishers',
    //     'summary',
    //     'release_dates',
    //     'rating',
    //     'aggregated_rating',
    //     'first_release_date'
    // ]).then((games) => {
        .then((games) => {
            // console.log(games);
        games.data.forEach((game) => {
            // console.log(game.rating);
            // console.log(game.cover);
            if (!game.cover) {
                // game.cover = "";
            } else {
            // const cover = client.image({cloudinary_id: game.cover.cloudinary_id}, 'cover_big', 'jpg');
            const cover = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + game.cover.image_id + '.jpg';
            game.cover = cover;
            }
        });
        res.json(games.data);
        }, (err) => {
            console.log(err);
        });
});

router.get('/year/:year/:page?', (req, res) => {
    const year = +req.params.year;
    const page = +req.params.page;
    let offset = 0;
    if (page) {
        offset = 50 * (page - 1);
    }
    // const start = (year - 1) + '-12-31';
    // const end = (year + 1) + '-01-01';
    const start_date = new Date((year-1), 11, 31);
    const end_date = new Date((year+1), 0, 1);
    apicalypse(requestOptions)
        .fields('name, summary, cover.image_id, first_release_date, genres.name, involved_companies.company.*, involved_companies.developer, involved_companies.publisher, platforms.*')
        .where(`first_release_date > ${start_date.valueOf()/1000} & first_release_date < ${end_date.valueOf()/1000} & parent_game = null & rating_count > 0`)
        .limit(50)
        .limit(50)
        .offset(offset)
        .sort('rating_count', 'desc')
        .request("/games")

    // client.games({
    //     filters: {
    //         'first_release_date-gt' : start,
    //         'first_release_date-lt': end,
    //         'cover-exists': true
    //     },
    //     limit: 50,
    //     offset: offset,
    //     order: 'rating_count:desc'
    // }, [
    //     'name',
    //     'cover',
    //     'developers',
    //     'publishers',
    //     'summary',
    //     'release_dates',
    //     'rating',
    //     'aggregated_rating',
    //     'first_release_date'
    // ]).then((games) => {
        .then((games) => {
        games.data.forEach((game) => {
            // const cover = client.image({cloudinary_id: game.cover.cloudinary_id}, 'cover_big', 'jpg');
            if (!game.cover) {
                game.cover = "";
            } else {
            const cover = 'https://images.igdb.com/igdb/image/upload/t_cover_big/' + game.cover.image_id + '.jpg';
            game.cover = cover;
            }
        });
        res.json(games.data);
    });
});

//get game from db by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Game.getGameById(id, 
        (err, game) => {
            if(err) {
                console.log(err);
                throw err;
            }

            

            res.json(game);
        }
    );
});


// update game
// check if is authenticated 
// check if req.user._id === my user id
router.put('/:id', (req, res) => {
    let newGame = {
        id: req.body.id,
        avgRating: req.body.avgRating,
        ratings: req.body.ratings,
        reviews: req.body.reviews,
        lists: req.body.lists,
        name: req.body.name,
        summary: req.body.summary,
        developers: req.body.developers,
        publishers: req.body.publishers,
        cover: req.body.cover,
        thumbnail: req.body.thumbnail,
        release: req.body.release,
        likes: req.body.likes,
        played: req.body.played,
        recentReview: req.body.recentReview
    };

    Game.findByIdAndUpdate(req.params.id, {$set: newGame}, (err, game) => {
        if (err) {
            console.log(err);
            throw err;
        }

        if(!game) {
            return res.json({success: false, msg: 'Something went wrong!'});
        }

        return res.json({success: true, msg: 'Game updated'});
    });
});


module.exports = router;
