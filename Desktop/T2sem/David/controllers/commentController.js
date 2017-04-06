let Comment = require('../models/comments');
var bodyParser = require('body-parser');
var session = require('express-session');

let commentController = {

    getComments: function(req, res) {
        var Activity = req.params._reviewID;
        Comment.find({ reviewNumber: Activity }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    },
    addComments: function(req, res) {
        var revs = new Comment;

        revs.reviewNumber = req.params._reviewID;

        /////SESSION NEEDED
        revs.client = req.session.username;

        revs.content = req.body.content;

        Comment.create(revs, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    }

}
module.exports = commentController;