var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('finalProject', ['companies','advertisements','activites']);
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
let Activity = require('../models/Activity');

let homeController={
  search:function(req,res) {

    req.checkBody('Search_bar', 'Please enter a search word').notEmpty();
    var errors = req.validationErrors();
    if(errors){
      res.render('errorPage' , {error: errors });
    }
    else {
    var Search_bar = req.body.Search_bar;
    console.log(Search_bar);
    Activity.find( {Name : Search_bar},
    function(err,activity){


      console.log(activity)
      res.json(activity)
        //  res.render('mainPage',
          //          {
            //            activity:doc_activity
              //      });

    })
    }
 },

 filter:function(req,res){
   var User_location = req.body.User_location;

   user.find( {location : User_location},
     function(err,doc){
       if(err){  res.render('errorPage' , { error: err});}
 else {

 console.log(doc);
   //res.render('mainPage',
    //         {
      //           companies: doc // assuming main page will only need companies for now
        //     });
 }
     })

 },

}
module.exports = homeController;
