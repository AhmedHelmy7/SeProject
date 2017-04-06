let User=require('../models/user');
let bcrypt =require('bcryptjs');

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

adminBan:function(req, res) {
  User.findOneAndUpdate({username:req.body.username},{isBanned:true},{},function(err, res){
    // End session
  if (err) {
                throw err;
            } else {
                console.log('Banned');
           }
});
},

adminDeban:function(req, res) {
if(!req.body.isAdmin)
  User.findOneAndUpdate({username:req.body.username},{isBanned:false},{},function(err, res){
    // End session
  if (err)
        throw err;
  else 
        console.log('Debanned');
});
},


deleteReview:function(req,res) {
  reviews.findOneAndRemove({id:req.body.id},{}, function(err, res){
    // End session
  if (err)
        throw err;
  else 
        console.log('Debanned');
});
}
}
module.exports=userController;

