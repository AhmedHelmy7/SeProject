var express = require('express');

var path=require ('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Sprint');

module.exports = app;

var app=express();
var Schema=mongoose.Schema;

var UserSchema  = new Schema({
    username: String,
  password:String,
  firstname :String,
	 creditCardNumber :String,
fav_list : [{
   name: String,
  location:String,
price:Number,
   date: Date
     }],

     sub_List:[{name :String}]
});

var activitySchema  = new Schema({
   name: String,
     location:String,
price:Number,
   date: Date
 
});

module.exports=mongoose.model('User',UserSchema);
var   User = mongoose.model("User", UserSchema);
 
module.exports=mongoose.model('fav',activitySchema);
var   fav = mongoose.model("fav", activitySchema);

app.set('view engine','ejs');




app.engine('html',require('ejs').renderFile);


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(session({secret: 'rocky'}));
app.use(express.static('public'));

var sess;
app.get('/',function(req,res){
    sess=req.session;
   
    sess.username; 
    sess.password; 
});
//edit profile 
app.post('/editProfile.html',function(req, res) {
	

  var username=req.body.username;
  var password=req.body.password;
  var firstname=req.body.firstname;
  var creditCardNumber=req.body.creditCardNumber;
  var fav_list=req.body.fav_list;
  var sub_List=req.body.sub_List;

User.findOne({username:req.session.username ,password:req.session.password},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.username =  req.body.username;
       User.password = req.body.password;
       User.firstname = req.body.firstname;
       User.creditCardNumber =req.body.creditCardNumber;
       User.fav_list=req.body.fav_list;
        User.sub_List=req.body.sub_List;
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})
});
//fav_list
app.get('/addtolist.html',function(req, res) {
 

    var name =req.body.name;
 var location =req.body.location;
  var price =req.body.price;
 var  date =req.body.date;
User.findOne({username:req.session.username ,password:req.session.password},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.username = User.username;
       User.password = User.password;
       User.firstname = User.firstname;
       User.creditCardNumber = User.creditCardNumber;
       User.fav_list.push({name:name,location:location,price:price,date:date})
         User.sub_List=User.sub_List ;
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})
});
//sub
app.get('/sublist.html',function(req, res) {


    var name =req.body.name;

User.findOne({username:req.session.username ,password:req.session.password},function(err){
  if(err){
     return res.status(500).send();
   }
   else{
     User.username = User.username;
       User.password = User.password;
       User.firstname = User.firstname;
       User.creditCardNumber = User.creditCardNumber;
       User.fav_list=User.fav_list ;
         User.sub_List.push({name})
 User.save(function (err) {
            if (err) {
                res.status(500).send(err)
    }
        });
         }
})

});





