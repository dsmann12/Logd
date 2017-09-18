const mongoose = require('mongoose');
const User = require('./user');
const Game = require('./game');

const ListSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    description: String,
    games: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Game'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    date: Date,
    gamesCount: {
        type: Number,
        default: 0
    },
    likesCount: {
        type: Number,
        default: 0
    }
});

ListSchema.post('remove', (list) => {
    User.findById(list.user, (err, user) => {
        user.lists.pull(list);
        Game.update(
            { _id: { $in: list.games } },
            { $pull: { lists: list._id } },
            { multi: true },
            (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    user.save();
                }
            }
        );
    });
});

const List = module.exports = mongoose.model('List', ListSchema);

module.exports.getListById = function(id, callback) {
    List.findById(id).populate('user', ['name', 'username', 'avatar']).populate('games').exec(callback);
}

module.exports.addList = function(list, callback) {
    list.save(callback);
}