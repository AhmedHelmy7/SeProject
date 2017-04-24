let Review = require('../models/reviews');
var bodyParser = require('body-parser');
let reviewsController = {

    getReviews: function(req, res) {
        //var Activity = req.body._id;
        console.log("enters back end");
        var Activity = req.params.activity
        Review.find({ activity: Activity }, function(err, acc) {
            if (err) {
                console.log(err);
                throw err;
            } else {
                res.json(acc);
                console.log(acc);
            }
        });
    },
    addReviews: function(req, res) {
        console.log('HIIII');
        var revs = new Review;

        revs.activity = req.params.activity;

        /////SESSION NEEDED
        revs.client = req.body.client;

        revs.content = req.body.content;

        revs.title = req.body.title;

        if (req.body.content == null || req.body.title == null || req.body.client == null || req.body.activity == null) {
            res.json({ success: false, message: 'please provide all fields' });
        }

        Review.create(revs, function(err, acc) {
            if (err) {
                console.log(err);
                res.json({ success: false, message: 'an error has occured' })
            } else {
                res.json({ success: true, message: 'your review was posted successfully' })
            }
        });
    }

}
module.exports = reviewsController;