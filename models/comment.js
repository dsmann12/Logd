const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    likes:[
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            date: Date      
        }
    ],
    date: Date
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.getCommentById = function(id, callback) {
    Comment.findById(id, callback);
}

module.exports.addComment = function(review, callback) {
    Comment.save(callback);
}