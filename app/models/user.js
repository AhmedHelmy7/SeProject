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
        },
	creditCardNumber :{type:String},
	fav_list : [{
   	name: String,
  	location:String,
	price:Number,
   	date: Date
     	}],

     sub_List:[{name :String}],
     isBanned :{type:Boolean},
     isAdmin :{type:Boolean},
     isSuperAdmin:{type:Boolean}
    }
);
const User=module.exports = mongoose.model('User',UserSchema);

