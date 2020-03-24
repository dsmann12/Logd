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

router.get('/', (req, res) => {
    const query = req.query.query;
    console.log(query);
    // client.games(
    //     {search: query},
    //     ['name', 'cover', 'developers', 'publishers', 'summary', 'release_dates', 'first_release_date']
    // ).then(
    //     (games) => {
    //         res.json(games);
    //     }
    // )
    // .catch((reason) => {
    //     setTimeout(() => {

    //     }, )
    // })
    searchGames(query, function(games) {
        console.log('in callback');
        res.json(games.data);
    });
});

function searchGames(query, callback) {
    // client.games(
    //     { search: query},
    //     ['name', 'cover', 'developers', 'publishers', 'summary', 'release_dates', 'first_release_date']        
    // ).then(callback)
    apicalypse(requestOptions)
        .fields('name, summary')
        .search(query)
        .limit(25)
        .request("/games")
    .then(callback)
    .catch(function (reason){
        console.log('Promise rejected in search for ', reason);
        //setTimeout(searchGames(query, callback), 1000);
        setTimeout(() => {
            console.log('Rejected');
            searchGames(query, callback);
        }, 5000);
    });
}

module.exports = router;
