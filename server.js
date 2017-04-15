var express = require('express');
var router = require('/home/helmy/Desktop/SeProject/app/routes/routes.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/finalProject";

var app = express();
const port=8097;

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

const path=require('path');
const cors=require('cors');
const passport=require('passport');
const morgan=require('morgan');
var session=require('express-session');

const users=require('../SeProject/app/routes/userRoutes');

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
