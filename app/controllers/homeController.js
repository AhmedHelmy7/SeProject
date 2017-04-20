var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
let Activity = require('../models/Activity');
let User=require('../models/user');

let homeController={
  search:function(req,res) {
  console.log(req.body.activity);
    req.checkBody('activity', 'Please enter a search word').notEmpty();
    var errors = req.validationErrors();
    if(errors){
      console.log("we are at home controller error search");
      res.send( errors);
    }
    else {
      var search_bar1 = req.body.activity;
      var search_bar = search_bar1.toLowerCase();
    console.log("we are at home controller search");
    console.log(search_bar);
    Activity.find( {Name : search_bar},
    function(err,activity){

      console.log(activity);

     res.json({"activities": activity});

    })
    }
 },

 searchRate:function(req,res) {
   console.log("we are at home controller search by rate");
   Activity.find().sort({avgRating: 'desc', Name: -1}).exec(
   function(err,activity){


     console.log(activity);
   //  res.send(activity);

    res.json({"activities": activity});

  })

},

 searchComp:function(req,res) {
 console.log(req.body.activity);
   req.checkBody('activity', 'Please enter a search word').notEmpty();
   var errors = req.validationErrors();
   if(errors){
     console.log("we are at home controller error search");
     res.send( errors);
   }
   else {
   var search_bar1 = req.body.activity;
   var search_bar = search_bar1.toLowerCase();
   console.log("we are at home controller search");
   console.log(search_bar);
   User.find( {Name : search_bar},
   function(err,company){


     console.log(company);

    res.json({"companies": company});

   })
   }
},

 filter:function(req,res){
   var User_location1 = req.body.location;
   var User_location = User_location1.toLowerCase();
console.log(User_location);
   User.find( {location : User_location},
     function(err,doc){
       if(err){ console.log(err);res.send( err);}
 else {
console.log(doc);
  console.log("we are at home controller filter");
   res.json({"company": doc});

 }
     })

 },

}
module.exports = homeController;
