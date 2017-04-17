let Review = require('../models/reviews');
var bodyParser = require('body-parser');
var session = require('express-session');


let reviewsController = {

    getReviews: function(req, res) {
        var Activity = req.params._id;
        Review.find({ activity: Activity }, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    },
    addReviews: function(req, res) {

       // console.log('DAk');
        var revs = new Review;

        revs.activity = req.body._id;

        /////SESSION NEEDED
        revs.client = req.body.username;


        revs.content = req.body.content;

        revs.title = req.body.title;


        Review.create(revs, function(err, acc) {
            if (err) {
                throw err;
            } else {
                res.json(acc);
            }
        });
    }

}
module.exports = reviewsController;