var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('finalProject', ['companies','advertisements','activites']);
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
    var search_bar = req.body.activity;
    console.log("we are at home controller search");
    console.log(search_bar);
    Activity.find( {Name : search_bar},"-_id", "-activirt_id",  //we can omit whatever fields we dont wanna show
    function(err,activity){


      console.log(activity);
    //  res.send(activity);

     res.json({"activities": activity});

    })
    }
 },

 filter:function(req,res){
   var User_location = req.body.location;
console.log(User_location);
   User.find( {location :User_location},"-_id",
     function(err,doc){
       if(err){ res.send( err);}
 else {
console.log(doc);
  console.log("we are at home controller filter");
   res.json({"company": doc});

 }
     })

 },

}
module.exports = homeController;
