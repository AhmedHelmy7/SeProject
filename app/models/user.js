var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt=require('bcryptjs');
var UserSchema=new Schema(
    {
        name:{
            type:String
             /*required: true*/
        },
        email:{
            type:String,
            required:true,
            lowercase:true,unique:true
        },
         category: {
        type: String,
        required: true
    },
     location: {
        type: String
    },
    subs: {
        type: [String],
        //i make it as  a default
        default: ["teamnamepending123456@gmail.com", "davidonsy123@gmail.com", "david.abdelmalak@student.guc.edu.eg"]
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
         /*,default:false},*/
     isAdmin :{type:Boolean},
         /*,default:false},*/
     isSuperAdmin:{type:Boolean}
         /*,default:false},*/
    }
);
const User=module.exports = mongoose.model('User',UserSchema);
