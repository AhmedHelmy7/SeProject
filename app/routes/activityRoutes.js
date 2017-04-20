const express = require('express');
var passport = require('passport');
var session =require('express-session')
var router = express.Router();

var activitiesController = require('../controllers/activitiesController');
//var commentController = require('../controllers/commentController');
var ratingController = require('../controllers/ratingController')


// add routes
//getAllActivitiesWhichIsActive
router.get('/:name', activitiesController.searchActivity);

router.get('/:name/trash', activitiesController.searchDeleted);

//add Activities by entering Name of Company
router.post('/', activitiesController.addActivities);

//viewActivity
router.get('/view/:_id', activitiesController.viewActivity);

//delte Activity
router.delete('/:_id', activitiesController.deleteActivity);

//Update
router.put('/:_id', activitiesController.updateActivity);


//post Comments.
//router.post('/:_reviewID', commentController.addComments);

//getCOMMENTS
//router.get('/:_reviewID/comments', commentController.getComments);
//routing to call the get getTopRatedActivities function
router.post('/top', activitiesController.getTopRatedActivities);
//routing to add a new rating
router.post('/createrating',ratingController.addRating);

// export router
module.exports = router;