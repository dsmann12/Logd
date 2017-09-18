const mongoose = require('mongoose');

//Game Schema
//Associate Reviews
//Associate Lists
const GameSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    avgRating: {
        type: Number,
        required: true,
        default: 0
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List'
        }
    ],
    //move out of object
    //convert images to proper URLs
    name: {
        type: String, 
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    developers: [
        {
            id: Number,
            name: String,
            _id: false
        }
    ],
    publishers: [
        {
            id: Number,
            name: String,
            _id: false
        }
    ],
    cover: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    release: {
        date: Date,
        year: Number,
        month: Number,
        day: Number
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    played: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Play'
        }
    ],
    lastReviewed: Date,
    likesCount: {
        type: Number,
        default: 0
    },
    playedCount: {
        type: Number,
        default: 0
    },
    ratingsCount: {
        type: Number,
        default: 0
    },
    listsCount: {
        type: Number,
        default: 0
    },
    reviewsCount: {
        type: Number,
        default: 0
    }
});

const Game = module.exports = mongoose.model('Game', GameSchema);

module.exports.getGameByIGDBId = function(id, callback) {
    const query = {id: id};
    Game.findOne(query, callback);
}

module.exports.getGameById = function(id, callback) {
    Game.findById(id, callback);
}

module.exports.addGame = function(game, callback) {
    game.save(callback);
}

//search if game is in database
module.exports.findGame = function(id) {
    const query = {id: id};
    Game.findOne(query, (err, game) => {
        if(err) {
            return false;
        }
        else {
            return true;
        }
    });
}

//addRating and update avgRating
function addRatingAndCalculateAvg(oldAvg, count, newValue) { 
    const newAvg = (oldAvg + ((newValue - oldAvg) / (count + 1)));
    return (isNaN(newAvg) || !isFinite(newAvg)) ? 0 : newAvg;
}

               
function deleteRatingAndCalculateAvg(oldAvg, count, oldValue) {
    const newAvg = (((count * oldAvg) - oldValue) / (count - 1));
    console.log('In delete', newAvg);
    return (isNaN(newAvg) || !isFinite(newAvg)) ? 0 : newAvg;
}

function updateRatingAndCalculateAvg(oldAvg, count, oldValue, newValue) {
    console.log(deleteRatingAndCalculateAvg(oldAvg, count, oldValue));
    let newAvg = deleteRatingAndCalculateAvg(oldAvg, count, oldValue);
    console.log('In update function', newAvg);
    newAvg = addRatingAndCalculateAvg(newAvg, count-1, newValue);
    console.log('In update after add', newAvg);
    //return newAvg;
    return newAvg;
}


module.exports.addRatingAndCalculateAvg = addRatingAndCalculateAvg;
module.exports.deleteRatingAndCalculateAvg = deleteRatingAndCalculateAvg;
module.exports.updateRatingAndCalculateAvg = updateRatingAndCalculateAvg;

