const igdb = require('igdb-api-node').default;
const client = igdb('IqIxOdRhXHmshZdaZo4CBtUFWq96p1Jn5OIjsnzFkhJ9sm8b04');
const mongoose = require('mongoose');
const Game = require('./models/game');
const Review = require('./models/review');
const List = require('./models/list');
const Comment = require('./models/comment');
const config = require('./config/database.js');
const User = require('./models/user');

//SOTC: 2207, ME: 73, HL2: 233, Journey: 1352, Portal 2: 72, Portal: 71
//Oblivion: 59, The Witcher 3: 1942, Rocket League: 11198, The Last of Us: 1009 
//MGS3: 379, Star Fox 64: 2591, Super Mario 3: 1068, Super Mario 64: 1074
//Final Fantasy VII: 427, KOTOR: 116, Braid: 2853, Pokemon Silver: 1513
//bioshock: 20, FNV: 16

//Connect To Database
mongoose.connect(config.database);

//On Connection 
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

seedGames(
    (games) => {
        console.log('done');
    }
);

function seedGames(callback) {
    //Get User Information
    User.getUserByUsername('dsmann12', (err, user) => {
        console.log(user);

        const gameIDs = [
            2207, 73, 233, 1352, 1009, 
            379, 71, 72, 1074, 427, 
            59, 1513, 1068, 2853, 1942, 
            116, 2591, 11198, 16, 20, 128,
            127, 113, 537, 1266, 1970, 5606,
            1983, 7334, 621, 624, 622, 649,
            623, 559, 625, 1939, 14762, 
            15, 9630, 549, 551, 499, 1906, 
            730, 733, 732, 731, 1020, 231,
            740, 986, 989, 7, 6803, 493, 
            11346, 11156, 7170, 523, 515,
            1941, 1865, 1866, 117, 1331,
            1058, 74, 75, 7349, 375, 376,
            380, 1103, 1104, 1107, 2935, 
            1561, 836, 1278, 3205, 6007,
            3025, 472, 3035, 141, 142, 2113,
            4180, 3760, 144, 475, 6160, 6159,
            163, 1068, 1074, 885, 2115, 565, 
            512, 7331, 7609, 80, 478, 949
        ];

        const games = [];

        //Load Test Database With Games
        gameIDs.forEach(
            (gameId) => {
                const game = {
                    id: gameId,
                    avgRating: 0, //null?
                    ratings: [],
                    reviews: [],
                    lists: [],
                    info: {},
                    release: {}
                };
                getInfo(game.id, 
                    (res) => {
                        game.name = res.body[0].name;
                        game.summary = res.body[0].summary;
                        const gameimage = res.body[0].cover; 
                        game.release.date = res.body[0].release_dates[0].date;
                        game.release.year = res.body[0].release_dates[0].y;
                        game.release.month = res.body[0].release_dates[0].m;
                        game.release.day = new Date(res.body[0].release_dates[0].date).getDate();


                        //Generate Reviews
                        // const reviews = [
                        //     {
                        //         user: {
                        //             id: user._id,
                        //             username: user.username
                        //         },
                        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam sed sapien pulvinar scelerisque et nec mauris. Ut mollis sem in nibh hendrerit, ut sollicitudin nunc tempor. Nulla blandit dolor enim, at mattis massa placerat sollicitudin. Curabitur ut mauris eu leo tristique euismod in eu nunc. Aenean ullamcorper sapien rhoncus condimentum consequat. Vivamus ac lacus et eros semper malesuada dignissim vel nisi. Vestibulum imperdiet ac elit et volutpat. Mauris volutpat sollicitudin placerat. Curabitur viverra dolor hendrerit diam lobortis tincidunt. Fusce at cursus diam. Pellentesque dapibus porta sapien, at lobortis lacus finibus at. Nullam tincidunt ultricies nisl, ac aliquet tellus congue quis. Morbi venenatis posuere finibus. Sed eu tortor non magna egestas venenatis id vehicula odio. Nullam tempor turpis ante, vitae venenatis dui finibus quis.',
                        //         rating: {
                        //             user: user._id,
                        //             game: game._id,
                        //             rating: 10,
                        //             date: Date.now()
                        //         },
                        //         likes: 0,
                        //         comments: [],
                        //         game: game._id,
                        //         date: new Date(),
                        //     },
                        //     {
                        //         user: {
                        //             id: user._id,
                        //             username: user.username
                        //         },
                        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam sed sapien pulvinar scelerisque et nec mauris. Ut mollis sem in nibh hendrerit, ut sollicitudin nunc tempor. Nulla blandit dolor enim, at mattis massa placerat sollicitudin. Curabitur ut mauris eu leo tristique euismod in eu nunc. Aenean ullamcorper sapien rhoncus condimentum consequat. Vivamus ac lacus et eros semper malesuada dignissim vel nisi. Vestibulum imperdiet ac elit et volutpat. Mauris volutpat sollicitudin placerat. Curabitur viverra dolor hendrerit diam lobortis tincidunt. Fusce at cursus diam. Pellentesque dapibus porta sapien, at lobortis lacus finibus at. Nullam tincidunt ultricies nisl, ac aliquet tellus congue quis. Morbi venenatis posuere finibus. Sed eu tortor non magna egestas venenatis id vehicula odio. Nullam tempor turpis ante, vitae venenatis dui finibus quis.',
                        //         rating: {
                        //             user: user._id,
                        //             game: game._id,
                        //             rating: 10,
                        //             date: Date.now()
                        //         },
                        //         likes: 0,
                        //         comments: [],
                        //         game: game._id,
                        //         date: new Date(),
                        //     },
                        //     {
                        //         user: {
                        //             id: user._id,
                        //             username: user.username
                        //         },
                        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam sed sapien pulvinar scelerisque et nec mauris. Ut mollis sem in nibh hendrerit, ut sollicitudin nunc tempor. Nulla blandit dolor enim, at mattis massa placerat sollicitudin. Curabitur ut mauris eu leo tristique euismod in eu nunc. Aenean ullamcorper sapien rhoncus condimentum consequat. Vivamus ac lacus et eros semper malesuada dignissim vel nisi. Vestibulum imperdiet ac elit et volutpat. Mauris volutpat sollicitudin placerat. Curabitur viverra dolor hendrerit diam lobortis tincidunt. Fusce at cursus diam. Pellentesque dapibus porta sapien, at lobortis lacus finibus at. Nullam tincidunt ultricies nisl, ac aliquet tellus congue quis. Morbi venenatis posuere finibus. Sed eu tortor non magna egestas venenatis id vehicula odio. Nullam tempor turpis ante, vitae venenatis dui finibus quis.',
                        //         rating: {
                        //             user: user._id,
                        //             game: game._id,
                        //             rating: 10,
                        //             date: Date.now()
                        //         },
                        //         likes: 0,
                        //         comments: [],
                        //         game: game._id,
                        //         date: new Date(),
                        //     },
                        //     {
                        //         user: {
                        //             id: user._id,
                        //             username: user.username
                        //         },
                        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam sed sapien pulvinar scelerisque et nec mauris. Ut mollis sem in nibh hendrerit, ut sollicitudin nunc tempor. Nulla blandit dolor enim, at mattis massa placerat sollicitudin. Curabitur ut mauris eu leo tristique euismod in eu nunc. Aenean ullamcorper sapien rhoncus condimentum consequat. Vivamus ac lacus et eros semper malesuada dignissim vel nisi. Vestibulum imperdiet ac elit et volutpat. Mauris volutpat sollicitudin placerat. Curabitur viverra dolor hendrerit diam lobortis tincidunt. Fusce at cursus diam. Pellentesque dapibus porta sapien, at lobortis lacus finibus at. Nullam tincidunt ultricies nisl, ac aliquet tellus congue quis. Morbi venenatis posuere finibus. Sed eu tortor non magna egestas venenatis id vehicula odio. Nullam tempor turpis ante, vitae venenatis dui finibus quis.',
                        //         rating: {
                        //             user: user._id,
                        //             game: game._id,
                        //             rating: 10,
                        //             date: Date.now()
                        //         },
                        //         likes: 0,
                        //         comments: [],
                        //         game: game._id,
                        //         date: new Date(),
                        //     },
                        //     {
                        //         user: {
                        //             id: user._id,
                        //             username: user.username
                        //         },
                        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis quam sed sapien pulvinar scelerisque et nec mauris. Ut mollis sem in nibh hendrerit, ut sollicitudin nunc tempor. Nulla blandit dolor enim, at mattis massa placerat sollicitudin. Curabitur ut mauris eu leo tristique euismod in eu nunc. Aenean ullamcorper sapien rhoncus condimentum consequat. Vivamus ac lacus et eros semper malesuada dignissim vel nisi. Vestibulum imperdiet ac elit et volutpat. Mauris volutpat sollicitudin placerat. Curabitur viverra dolor hendrerit diam lobortis tincidunt. Fusce at cursus diam. Pellentesque dapibus porta sapien, at lobortis lacus finibus at. Nullam tincidunt ultricies nisl, ac aliquet tellus congue quis. Morbi venenatis posuere finibus. Sed eu tortor non magna egestas venenatis id vehicula odio. Nullam tempor turpis ante, vitae venenatis dui finibus quis.',
                        //         rating: {
                        //             user: user._id,
                        //             game: game._id,
                        //             rating: 10,
                        //             date: Date.now()
                        //         },
                        //         likes: 0,
                        //         comments: [],
                        //         game: game._id,
                        //         date: new Date(),
                        //     }
                        // ];

                        // //Create Review Models
                        // reviews.forEach(
                        //     (review) => {
                        //         //Generate Comments
                        //         const comments = [
                        //             {
                        //                 text: 'This is a fake comment text',
                        //                 user: {
                        //                     id: user._id,
                        //                     username: user.username
                        //                 },
                        //                 likes: [],
                        //                 date: new Date()
                        //             },
                        //             {
                        //                 text: 'This is a fake comment text',
                        //                 user: {
                        //                     id: user._id,
                        //                     username: user.username
                        //                 },
                        //                 likes: [],
                        //                 date: new Date()
                        //             },
                        //             {
                        //                 text: 'This is a fake comment text',
                        //                 user: {
                        //                     id: user._id,
                        //                     username: user.username
                        //                 },
                        //                 likes: [],
                        //                 date: new Date()
                        //             }
                        //         ];

                        //         comments.forEach(
                        //             (comment) => {
                        //                 const newComment = new Comment(comment);
                        //                 newComment.save();
                        //                 review.comments.push(newComment);
                        //             }
                        //         );

                        //         const newReview = new Review(review);
                        //         newReview.save(
                        //             (err, savedReview) => {
                        //                 if(err) {
                        //                     console.log(err);
                        //                     throw err;
                        //                 }

                        //                 console.log('Review Added');
                        //             }
                        //         );
                        //         game.reviews.push(newReview);
                        //     }
                        // );

                        getCover(gameimage.cloudinary_id, 
                            (cover) => {
                                game.cover = cover;
                                getThumbnail(gameimage.cloudinary_id, 
                                    (thumb) => {
                                        game.thumbnail = thumb;
                                        //console.log(game);
                                        //developers and publishers
                                        game.developers = res.body[0].developers;
                                        game.publishers = res.body[0].publishers;
                                        client.companies(
                                            {ids: res.body[0].developers},
                                            ['name']
                                        ).then(
                                            (developers) => {
                                                game.developers = developers.body
                                                client.companies(
                                                    {ids: res.body[0].publishers},
                                                    ['name']
                                                ).then(
                                                    (publishers) => {
                                                        game.publishers = publishers.body;
                                                        var newGame = new Game(game);
                                                        newGame.save((err, saved) => {
                                                            if (err) {
                                                                console.log(err);
                                                            }
                                                            else {
                                                                console.log('saved');
                                                                games.push(newGame);
                                                                if(games.length === gameIDs.length){
                                                                    callback(games);
                                                                }
                                                            }
                                                        });
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                });
            }
        );
    });
}

function getInfo(id, callback) {
    client.games(
        {ids: [id]},
        ['name', 'cover', 'developers', 'publishers', 'summary', 'release_dates']
    ).then(callback);
}

function getInfoMulti(ids, callback) {
    client.games(
        {ids: ids},
        ['name', 'cover', 'developers', 'publishers', 'summary']
    ).then(callback);
}

//get cover image
function getCover(id, callback) {
    const cover = client.image({cloudinary_id: id}, 'cover_big_2x', 'jpg');
    callback(cover);
}

//get thumbnail image
function getThumbnail(id, callback) {
    const thumb = client.image({cloudinary_id: id}, 'cover_small', 'jpg');
    callback(thumb);
}



// client.games(
//     {search: 'fallout', limit: 15},
//     ['name', 'cover', 'developers', 'publishers', 'summary']
// ).then(
//     (response) => {
//         console.log(response.body);
//     }
// )