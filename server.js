const express=require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const morgan=require('morgan');
const expressValidator = require('express-validator');

var DB_URI = "mongodb://localhost:27017/finalProject";
var session=require('express-session');
const app=express();
const users=require('../SeProject/app/routes/userRoutes');
const ads=require('../SeProject/app/routes/adRoutes');
const main=require('../SeProject/app/routes/mainRouter');
const port=8097;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
// configure app
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public'));



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


//express valiator Middleware
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
app.use('/ads',ads);
app.use('/main',main);

app.get('/',function(req,res)
{
});
app.listen(port,function()
{
    console.log('Running on port '+port);
});
//27017q
