const express=require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const morgan=require('morgan');
var router = require('./routes/routes');
var DB_URI = "mongodb://localhost:27017/finalProject";
var session=require('express-session');
const app=express();
const users=require('../SeProject/app/routes/userRoutes');
const port=8097;

// configure app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/', router);

// start the server
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



//app.use('./users',users);

app.use(cors());
app.use(express.static(__dirname + '/public'));
//app.use(session({secret:"ronaldo",resave:false,saveUninitialized:true}));
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
