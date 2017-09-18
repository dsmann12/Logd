const mongoose = require('mongoose');
const User = require('./user');
const Game = require('./game');

const PlaySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    date: Date
});

PlaySchema.post('remove', (play) => {
    User.findById(play.user, (err, user) => {
        Game.findById(play.game, (err, game) => {
            user.played.pull(play);
            game.played.pull(play);
            user.playedCount = user.playedCount - 1;
            game.playedCount = game.playedCount - 1;
            user.save();
            game.save();
        });
    });
});

const Play = module.exports = mongoose.model('Play', PlaySchema);