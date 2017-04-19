// require dependincies
const express = require('express');

var router = express.Router();
var reviewsController = require('../controllers/reviewsController');


// add routes
//getAllReviews
router.get('/review', reviewsController.getReviews);

//post Review
router.post('/review', reviewsController.addReviews);




// export router
module.exports = router;
