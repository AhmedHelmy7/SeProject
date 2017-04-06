<<<<<<< HEAD
=======
var express = require('express');
var router = require('./routes/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/finalProject";

var app = express();

// configure app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI, function(err) {
    if (err) {
        console.log('not');
    } else {
        console.log('conn');
    }
});
app.use('/', router);

// start the server
app.listen(8095, function() {
    console.log("server is listening on port 8095");
})
>>>>>>> Omar
const express=require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const morgan=require('morgan');
var session=require('express-session');

mongoose.connect('mongodb://localhost:27017/finalProject',function(err)
{
    if(err)
    {
        console.log('not connected')
    }
    else{
        
        console.log('success on db connection');
    }
});

const app=express();
const users=require('../SeProject/app/routes/userRoutes');
const port=8089;


//app.use('./users',users);

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({secret:"ronaldo",resave:false,saveUninitialized:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use('/users',users);


app.get('/',function(req,res)
{
});
app.listen(port,function()
{
    console.log('Running on port '+port);
});
//27017q
