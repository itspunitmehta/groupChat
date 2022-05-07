const bcrypt = require('bcrypt');

const User = require('../models/user');


exports.userSignup = (req,res,next)=>{
    const {name,email,phone,password} = req.body;
    // console.log(name,"huhw");
    const saltround = 10;
    bcrypt.genSalt(saltround, function(err,salt){
        bcrypt.hash(password,salt, function(err,hash){
            if(err){
                // console.log(err)
                res.json({message:'Unable to create user'})
            }
            User.create({name,email,phone,password:hash})
            .then(response=>{
                res.status(201).json({message:"user created", success:true,response:response});
            })
            .catch(err=>{
                // console.log(err);
                res.status(403).json({message:"Something went wrong",success:false,error:err})
            })
        })
    })
}


exports.userLogin = (req,res,next)=>{
    const user = req.body;
    console.log(user);
    res.status(201).json({message:"user created", success:true});
}