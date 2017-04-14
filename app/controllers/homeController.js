var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('finalProject', ['companies','advertisements','activites']);

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
    db.activities.find( {activity_name : Search_bar},
    function(err,doc_activity){

        var activitiesLength = doc_activity.length;

        console.log(doc_activity);

          res.render('mainPage',
                    {
                        activity:doc_activity
                    });
    })
    }
 },

 filter:function(req,res){
   var User_location = req.body.User_location;

   db.companies.find( {location : User_location},
     function(err,doc){
       if(err){  res.render('errorPage' , { error: err});}
 else {
 console.log(doc)
   res.render('mainPage',
             {
                 companies: doc // assuming main page will only need companies for now
             });
 }
     })


 },

}
module.exports = homeController;
