const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const morgan = require('morgan');
var session = require('express-session');
const expressValidator = require('express-validator');
const app = express();


//mongodb connection
mongoose.connect('mongodb://localhost:27017/finalProject', function(err) {
    if (err) {
        console.log('not connected')
    } else {
        console.log('success on db connection');
    }
});

//routes
const users = require('./app/routes/userRoutes');
const activityroutes = require('./app/routes/activityroutes');


//express valiator Middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));


app.use(cors());
app.use(express.static(__dirname + '/public'));
//app.use(session({secret:"ronaldo",resave:false,saveUninitialized:true}));
app.use(morgan('dev'));
app.use(session({
    secret: 'super secret',

    cookie: { maxAge: 60000 }
}));

//body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//passport connection
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


//routes connection
app.use('/users', users);
app.use('/activities', activityroutes);



// frontend routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html')); //respond to the route request with the html file.
});


//connection
const port = 8081;
app.listen(port, function() {
    console.log('Running on port ' + port);
});