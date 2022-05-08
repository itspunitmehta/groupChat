const { response } = require('express');
const User = require('../models/user');
const Message = require('../models/user');

exports.getUser = (req,response,next)=>{
    const loggedInUser = req.user.name;
    let allUser = [];
    // console.log(loggedInUser);
    User.findAll()
    .then(users=>{
        users.forEach(user => {
            allUser.push(user.name)
        })
        return response.status(200).json({name:loggedInUser,listOfUser:allUser});
    })
    .catch(err=>{
        return response.status(402).json({message:"Wrong path", success:false})
    })
}

exports.postMessage = (req,res,next)=>{
    const user = req.user.name;
    const {message} = req.body;
    req.user.createMessage({message})
    .then(msg=>{
        return res.status(201).json({msg,user,success:true})
    })
    .catch(err=>{
        return res.status(403).json({err,success:false})
    })
}