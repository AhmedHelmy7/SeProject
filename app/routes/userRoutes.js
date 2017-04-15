var express=require('express');
var router =express.Router();
var User=require('../models/user');


var userController=require('../controllers/userController');
//onst config = require('/home/carol/Desktop/SeProject/config/database.js');


router.put('/editProfile/:id',userController.editProfile);

router.put('/ addToFavourites/:id',userController.addToFavourites);

router.put('/getSubList/:id',userController.getSubList);



module.exports=router
