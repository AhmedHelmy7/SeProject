// require dependincies
const express = require('express');

var router = express.Router();
var reviewsController = require('../controllers/reviewsController');


// add routes
//getAllReviews
router.get('/review/:activity', reviewsController.getReviews);

//post Review
router.post('/review/:activity', reviewsController.addReviews);




// export router
module.exports = router;