let User=require('../models/user');
let reviews = ('../models/reviews');
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
  if(req.body.username == null || req.body.username=='')
    return res.json({success:false,msg:'Please, Enter Username !'}) 
 else{
  User.findOneAndUpdate({username:req.body.username},{isBanned:true},{},function(err){
    // End session
  if (err) {
                return res.json({success:false,msg:'Error Occured, User not banned !'})
            } else {
                 return res.json({success:true,msg:'Banned successfully'})
           }
});
}
},

adminDeban:function(req, res) {

if(req.body.username == null || req.body.username=='')
  return res.json({success:false,msg:'Please, Enter Username !'})  
else {
if(!req.body.isAdmin)
  User.findOneAndUpdate({username:req.body.username},{isBanned:false},{},function(err){
    // End session
  if (err)
        return res.json({success:false,msg:'Error Occured, Unbanning failed !'})
  else 
         return res.json({success:true,msg:'Unbanned successfully'})
});
}
},


deleteReview:function(req,res) {
  reviews.findOneAndRemove({id:req.body.id},{}, function(err){
    // End session
  if (err)
        return res.json({success:false,msg:'Error Occured, Deletion failed !'})
  else 
         return res.json({success:true,msg:'Review deleted successfully'})
});
}
}
module.exports=userController;

