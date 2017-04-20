const express = require('express');

var router = express.Router();

var activitiesController = require('../controllers/activitiesController');
//var commentController = require('../controllers/commentController');
var ratingController = require('../controllers/ratingController')


// add routes
//getAllActivitiesWhichIsActive

/*router.get('/:name/trash', activitiesController.searchDeleted);
 */
//addActivity


//viewActivity
/*router.get('/view/:_id', activitiesController.viewActivity);
 */
//delte Activity

//Update
//router.put('/:_id', activitiesController.updateActivity);


//post Comments.
//router.post('/:_reviewID', commentController.addComments);

//getCOMMENTS
//router.get('/:_reviewID/comments', commentController.getComments);
//routing to call the get getTopRatedActivities function
//router.post('/top', activitiesController.getTopRatedActivities);
//routing to add a new rating
//router.post('/createrating', ratingController.addRating);

// export router
module.exports = router;