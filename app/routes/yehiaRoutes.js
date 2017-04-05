var express =require('express');
var router = express.Router();
var activityController = require('../controllers/activityController');
var ratingController=require('../controllers/ratingController')
router.get('/',activityController.getTopRatedActivities);

router.post('/',ratingController.addRating);


module.exports = router;