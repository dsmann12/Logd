const igdb = require('igdb-api-node').default;
// const client = igdb('IqIxOdRhXHmshZdaZo4CBtUFWq96p1Jn5OIjsnzFkhJ9sm8b04');
const client = igdb('7677923721164db9824d6bc5d1ebae5b');

const config = require('./config/database');
const mongoose = require('mongoose');
const Comment = require('./models/comment');
const Review = require('./models/review');

//Connect To Database
mongoose.connect(config.database);

//On Connection 
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

//On Database Error
mongoose.connection.on('error', (err) => {
	console.log('Database Error ' + err);
});

//search for game
// const start = '2010-12-31';
// const end = '2020-01-01';

// client.games(
//     {
//         filters: {
//             'first_release_date-gt': start,
//             'first_release_date-lt': end
//         },
//         limit: 10,
//         offset: 0,
//         order: 'rating_countdesc'
//     },
//     ['name', 'cover', 'developers', 'publishers', 'summary', 'first_release_date']
// ).then(
//     (games) => {
//         console.log(games);
//     }
// );

const start = new Date(2010, 12, 31);

client.games({
    filters: {
        // 'release_dates.date-gt': '2010-12-31',
        // 'release_dates.date-lt': '2012-01-01'
        'release_dates.date-gt': '2005-12-31'
        // 'cover-exists': true
        // 'rating-gt': '90'
    },
    limit: 5,
    offset: 0,
    order: 'release_dates.date:desc',
    search: 'zelda'
}, [
    'name',
    'release_dates.date',
    'rating',
    'hypes',
    'cover'
]).then((games) => {
    console.log(games);
});

client.companies(
    {ids: [222, 2]},
    ['name']
).then(
    (companies) => {
     console.log(companies);
    }
);

var today = new Date();
console.log(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 21));

Review.find({}).populate('comments').exec(
    (err, response) => {
        if(err) {
            console.log(err);
            throw err;
        }
        console.log('In review');
        console.log(response[0]);
    }
);
