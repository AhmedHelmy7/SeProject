var express=require('express');
var router =express.Router();
var User=require('../models/user');
var passport = require('passport');
const jwt = require('jsonwebtoken');
var userController=require('../controllers/userController');
const config = require('/home/anas/Desktop/SeProject-Anas/config/database.js');


router.post('/register',(req,res,next)=>{
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        isAdmin:req.body.isAdmin,
        isBanned:req.body.isBanned
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
    const username =req.body.username;
    const password=req.body.password;

    userController.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:'user not found'})
        }
        userController.comparePassword(password,user.password,(err,isMatch)=>{
            if(err)throw err;
            if(isMatch){
                const token =jwt.sign(user,config.secret,{
                    expiresIn:604800 // 1 week
                })
                if(!user.isBanned)
                {
                const token =jwt.sign(user,config.secret,{
                    expiresIn:604800 // 1 week
                })}
                else{
                    return res.json({success:false,msg:'You are banned from the server'})
                }

                res.json({success:true,token:'JWT '+token,user:{
                    id:user._id,
                    name:user.name,
                    username:user.username,
                    email:user.email
                }

            })
            }else{
                return res.json({success:false,msg:'Wrong password'})
            }
        })
    })
});

module.exports=router
