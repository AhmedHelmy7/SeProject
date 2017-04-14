let Rating = require('../models/Rating');
let ActivityRated = require('../models/Activity');
let RegisteredUser = require('../models/RegisteredUser')
let ratingController = {
    addRating: function(req, res) {
        let rating = new Rating(req.body);
        let ratingFound = Rating.findById(rating._id);

        Rating.create(function(err, rating) {
            if (err) {
                res.send(err.message);
                console.log(err);
            } else {
                
                console.log(rating)

                res.redirect('/'); //b3d may3ml rating hayrg3 le fen


            }
        })
    }
}
module.exports = ratingController;