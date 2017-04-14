let Rating = require('../models/Rating');
let Activity = require('../models/Activity');
let RegisteredUser = require('../models/RegisteredUser')
let ratingController = {
    //add rating function that creates a new rating in the ratings collection and adds its id in the array list of the corresponding activity and calculates the avgRating of that activity
    addRating: function(req, res) {
        let rating = new Rating({
            activityID:req.body.activityID,
            registeredUserID:req.body.registeredUserID,
             rating:req.body.rating
        });       
        Rating.create(rating,function(err, acc) {
            if (err) {
                res.send(err.message);
                console.log(err);
            } else {
              
               Activity.findById(acc.activityID,(err,activity)=>{
                    activity.numberOfRatings+=1;
                    activity.ratings.push(rating._id);
                    activity.avgRating=(((activity.numberOfRatings-1)*activity.avgRating)+rating.rating)/activity.numberOfRatings;
                    Activity.findByIdAndUpdate(rating.activityID,activity,{},(err,res)=>{
                        if (err) {
                            throw err;
                        } else {
                            console.log('Updated');
                        }
                    });
                    
                });
                
                res.json(acc);
            }
        })
    }
}
module.exports = ratingController;