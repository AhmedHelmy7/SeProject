var express=require('express');
var router =express.Router();
var User=require('../models/user');
var passport = require('passport');
const jwt = require('jsonwebtoken');
var userController=require('../controllers/userController');
const config = require('../../config/database.js');
var session=require('express-session');
var flag=false;

router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
        });

    userController.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,msg:'Failed to register user'});

        }else{
            res.json({success:true,msg:'user registered '});

        }
    });
});
router.post('/registerComp',(req,res,next)=>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        location:req.body.location,
        isCompany:true
    });
    userController.addUser(newUser,(err,user)=>{
        if(err){
                console.log(err);
        
            res.json({success:false,msg:'Failed to register user'});

        }else{
            res.json({success:true,msg:'user registered '});

        }
    });
 });
router.post('/login',(req,res,next)=>{
    if(!flag)
    {
    const username =req.body.username;
    const password=req.body.password;
     //var sess=req.session;

    userController.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:'user not found'})
        }
        userController.comparePassword(password,user.password,(err,isMatch)=>{
            if(err)throw err;
            if(isMatch){
                if(!user.isBanned)
                {
                    flag=true;
                    const token =jwt.sign(user,config.secret,{
                        expiresIn:604800 // 1 week
                        
                    })
                    res.json({success:true,token:'JWT '+token,user:{
                        id:user._id,
                        name:user.name,
                        username:user.username,
                        email:user.email
                    } 
                
                    })
                }
                
                else{
                    return res.json({success:false,msg:'You are banned from the server'})
                }

                
             }else{
                return res.json({success:false,msg:'Wrong password'})
            }
        })		
            })
        }
        else{
             return res.json({success:false,msg:'You are already logged in,please signout first'})
        }      
});
router.post('/signout',(req,res,next)=>{
    flag=false;
    
});
//superadmin Routes
router.put('/superban',userController.superban);
router.put('/superdeban',userController.superdeban);
router.put('/promote',userController.promote);
router.put('/demote',userController.demote);
//admin routes
router.put('/adminban',userController.adminBan);
router.put('/admindeban',userController.adminDeban);
router.post('/deleteReview',userController.deleteReview);

router.put('/editProfile',userController.editProfile);
router.get('/viewCompanies',userController.viewCompanies);
router.put('/addToFavourites',userController.addToFavourites);
router.put('/getSubList',userController.getSubList);
router.get('/myFavourites',userController.myFavourites);
router.get('/mySubscribers',userController.mySubscribers);


router.get('/profile', passport.authenticate('jwt', {session:false}),userController.getProfile);

module.exports=router;