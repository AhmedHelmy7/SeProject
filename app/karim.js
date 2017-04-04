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
var mongojs = require('mongojs');
var db = mongojs('SEProject', ['companies']);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Global variables
app.use (function(req,res,next){
  res.locals.max_ads = 5;
  next();
});

// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.get('/',function(req,res){
  db.companies.find( function (err, docs) {
    res.render('mainPage' , {
      companies: docs

    });
  })

});


//3.2 user can search for activates so that he can find an activity needed
// this function is  called with a "Search_bar" paramater from user and finds the activity with that name.
// i am assuming that companies are linked with their respective activities using an id.
//(as in each company has a list of ids and each activity has a unique id)
app.post('/mainPage/search', function(req,res) {

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

});


//1.8 Clients can filter entertainment places by location
//users enter a location and click on a button named "by location" and only companies in the location they specified are shown.
// this function is  called with a "user_location" paramater entered by the user and finds the companies in that location and returns
// a list of the companies to the main page.
app.post('/mainPage/filter', function(req,res){
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


});


//company submit ad image in a link formate
app.get('/submit/imageLink',function(req,res) {

  var newlink = req.body.newlink;
  var company = req.body.company;

  db.company.count({}, function(err, c) {



if(c<5) //how many ads will we have? perhaps some function of number of companies?
{

db.company.findOne(
  {Company_name : company},
    function(err,doc){
      var curlist = doc.ads
      curlist.push(newlink)

      db.companies.findAndModify({
        query:{Company_name : company},
        update: {$set: {ads : curlist}},
        new: true
      }, function (err, doc, lastErrorObject) {

      db.ads.insert(newlink,function(err,result){

        res.render('profile' , {
          company:company // not sure what to pass for profile yet.
        });
      })
    })

    })

  } else {
    res.render('profile' , {
      company:doc,
      error: "we dont currently have an empty place for your ad :("
    });
  }

  });
});


app.listen(4000,function() {
console.log('server started on port 4000...')
})
