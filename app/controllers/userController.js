let User=require('../models/user');
let bcrypt =require('bcryptjs');
let session=require('express-session');
let userController={
    getUserById:function(id,callback){
        User.findById(id,callback);
    },
     getUserByUsername:function(username,callback){
         const query = {username:username};
        User.findOne(query,callback);
    },

    addUser:function(newUser,callback){
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password, salt,(err,hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
        });
    },
    comparePassword:function(candidatePassword,hash,callback){
        bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
            if(err)throw err;
            callback(null,isMatch);
        });

    },

    superban:function(req, res) {
User.findOneAndUpdate({username:req.body.username},{isBanned:true},{},function(err, res){
    // End session
  if (err) {
                throw err;
            } else {
                console.log('Banned');
           }
});
},
superdeban:function(req, res) {
User.findOneAndUpdate({username:req.body.username},{isBanned:false},{},function(err, res){
    // End session
  if (err) {
                throw err;
            } else {
                console.log('Debanned');
           }
});
},
promote:function(req, res) {
User.findOneAndUpdate({username:req.body.username},{isAdmin:true},{},function(err, res){
  if (err) {
                throw err;
            } else {
                console.log('Promoted');
           }
});
},
demote:function(req, res) {
    

User.findOneAndUpdate({username:req.body.username},{isAdmin:false},{},function(err, res){
  if (err) {
                throw err;
            } else {
                console.log('Demoted');
           }
});
},
getProfile:function(req,res,next){
        req.session.user=req.user;
        req.session.flag=true;
        res.json({user:req.user});
    }
}
module.exports=userController;

//updateActivity: (req, res) => {
//        var id = req.params.username;
//        var query = { username: username };
//        var update = {
//            isAdmin = false,
//        }
//        Activity.findOneAndUpdate(query, update, {}, function(err, res) {
//            if (err) {
//                throw err;
//            } else {
//                console.log('Updated');
//            }
//        });
//    }