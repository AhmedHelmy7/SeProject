var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt=require('bcryptjs');
var UserSchema=new Schema(
    {   
        name:{
            type:String
        },
        email:{
            type:String,
            required:true,
            lowercase:true,unique:true
        },
        username:{
            type:String,
            lowercase:true,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
        
    }
);
<<<<<<< HEAD
const User=module.exports = mongoose.model('User',UserSchema);
=======
const User=module.exports = mongoose.model('User',UserSchema);

>>>>>>> master
