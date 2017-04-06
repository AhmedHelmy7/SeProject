const express = require('express');

var router = express.Router();

var activitiesController = require('../controllers/activitiesController');
var commentController = require('../controllers/commentController');
var ratingController = require('../controllers/ratingController')


// add routes
//getAllActivitiesWhichIsActive
router.get('/:name', activitiesController.searchActivity);

router.get('/:name/trash', activitiesController.searchDeleted);

//add Activities by entering Name of Company
router.post('/:name', activitiesController.addActivities);

//viewActivity
router.get('/view/:_id', activitiesController.viewActivity);

//delte Activity
router.delete('/:_id', activitiesController.deleteActivity);

//Update
router.put('/:_id', activitiesController.updateActivity);


//post Comments.
router.post('/:_reviewID', commentController.addComments);

//getCOMMENTS
router.get('/:_reviewID/comments', commentController.getComments);

router.get('/gettop', activitiesController.getTopRatedActivities);

router.post('/createrating', ratingController.addRating);

// export router
module.exports = router;