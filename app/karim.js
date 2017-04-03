//General Notes:
// Activities need a name and id.
// i am using "mainPage" as the name for the main page.
// i am using "activities" as the collection of activities in the database
// i am using "companies" as the collection of companies in the database
//  i am using "db" as the database name


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Global variables
app.use (function(req,res,next){
  res.locals.max_ads = 5;
  next();
});

//3.2 user can search for activates so that he can find an activity needed
// this function is  called with a "Search_bar" paramater from user and finds the activity with that name.
// i am assuming that companies are linked with their respective activities using an id.
//(as in each company has a list of ids and each activity has a unique id)
app.post('/mainPage/search', function(req,res){

req.checkBody('Search_bar', 'Please enter a search word').notEmpty();
var errors = req.validationErrors();
if(errors){
  res.render('errorPage' , { });
}
else {
var Search_bar = req.Search_bar;
db.activites.find( {activity_Name : Search_bar},id,
  function(err,doc_activity){
db.companies.find({},function(err,doc_company){

    var returnedCompanies: [];
    var companyLength = doc_company.activity_id.length;
    var activitiesLength = doc_activity.length;
    for (var i = 0; i < companyLength; i++) {
      for (var j = 0; j<activitiesLength; j++)
      {

        if (doc_company.activity_id[i]==doc_activity[j])
        {
            returnedCompanies.push(doc_company[i]);
        }
      }

      res.render('mainPage',
                {
                    companies:returnedCompanies
                });
})


    var activites_ID: [];
    var arrayLength = doc.length;
for (var i = 0; i < arrayLength; i++) {

if(doc.id == )
{activities_ID.push();}

}})}
});


//1.8 Clients can filter entertainment places by location
//users enter a location and click on a button named "by location" and only companies in the location they specified are shown.
// this function is  called with a "user_location" paramater entered by the user and finds the companies in that location and returns
// a list of the companies to the main page.
app.post('/mainPage/filter', function(req,res){

  db.companies.find( {user_location : location},
    function(err,doc){
      if(err){  res.render('errorPage' , { });}
else {

  res.render('mainPage',
            {
                companies: doc
            });
}
    })


});


//company submit ad image in a link formate
app.post('/submit_img_link',function(req,res) {

  db.company.count({}, function(err, c) {


  var newlink = req.body.newlink;
  var company = req.body.company;
if(c<max_ads)
{
db.company.findOne(
  {Company_name : company},
    function(err,doc){
      var curlist = doc.ads
      curlist.push(newlink)

      db.users.findAndModify({
        query:{Company_name : company},
        update: {$set: {ads : curlist}},
        new: true
      }, function (err, doc, lastErrorObject) {

      db.ads.insert(newlink,function(err,result){

        res.render('profile' , {
          company:doc
        });

      }
      })
    }))
  } else {
    res.render('profile' , {
      company:doc,
      error: "we dont currently have an empty place for your ad :("
    });
  }
  });

});
