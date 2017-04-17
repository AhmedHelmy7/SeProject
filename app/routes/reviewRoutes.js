// require dependincies 
const express = require('express');

var router = express.Router();
var reviewsController = require('../controllers/reviewsController');


// add routes
//getAllReviews
router.get('/:_id/reviews', reviewsController.getReviews);

//post Review
router.post('/add', reviewsController.addReviews);





// export router
module.exports = router;