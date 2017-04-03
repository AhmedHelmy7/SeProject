var express=require('express');
var app=express();
var port=process.env.PORT ||8080;
var morgan=require('morgan');
var mongoose=require('mongoose');
var router=express.Router();
var bodyParser = require('body-parser');
var appRoutes;
var path=require('path');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
mongoose.connect('mongodb://localhost:27017/student',function(err)
{
    if(err)
    {
        console.log('not connected')
    }
    else{
        console.log('success');
    }
});
app.get('*',function(req,res)
{
});
app.listen(port,function()
{
    console.log('Running on port '+port);
});
//27017q