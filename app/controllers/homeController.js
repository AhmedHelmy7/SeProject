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
 var Search_bar = req.Search_bar;
 db.activites.find( {activity_Name : Search_bar},
 function(err,doc_activity){
 //db.companies.find({},function(err,doc_company){
   //  var returnedCompanies= [];
   //  var companyLength = doc_company.activity_id.length;
     var activitiesLength = doc_activity.length;
   //  for (var i = 0; i < companyLength; i++) {
   //    for (var j = 0; j<activitiesLength; j++)
   //    {
     //    if (doc_company.activity_id[i]==doc_activity[j])
     //    {
       //      returnedCompanies.push(doc_company[i]);
       //  }
     //  }}
       res.render('mainPage',
                 {
                     activity:doc_activity
                 });
 //})
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
