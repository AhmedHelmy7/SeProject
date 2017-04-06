<<<<<<< HEAD
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const morgan = require('morgan');
var session = require('express-session');

mongoose.connect('mongodb://localhost:27017/finalProject', function(err) {
    if (err) {
=======
var express=require('express');
var app=express();
var port=process.env.PORT ||8080;
var morgan=require('morgan');
var mongoose=require('mongoose');
var router=express.Router();
var bodyParser = require('body-parser');
var appRoutes;
//yehia router Config
var router =require('./app/routes/yehiaRoutes');
var path=require('path');


app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost:27017/student',function(err)
{
    if(err)
    {
>>>>>>> 2ac7c602d76440874fe049f593b0f9551b2abfe4
        console.log('not connected')
    } else {

        console.log('success on db connection');
    }
});

<<<<<<< HEAD
const app = express();
const users = require('../SeProject/app/routes/userRoutes');
const activityroutes = ('../SeProject/app/routes/activityRoutes');
const port = 8089;


app.use('./activities', activityroutes);
//app.use('./users',users);

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: "ronaldo", resave: false, saveUninitialized: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/users', users);


app.get('/', function(req, res) {});
app.listen(port, function() {
    console.log('Running on port ' + port);
=======
app.use(router);

app.get('*',function(req,res)
{
});
app.listen(port,function()
{
    console.log('Running on port '+port);
>>>>>>> 2ac7c602d76440874fe049f593b0f9551b2abfe4
});
//27017q