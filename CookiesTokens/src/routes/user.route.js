import express from 'express';
import userModel from '../models/user.model.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post("/register",async(req,res)=>{
  let {name,email,password} = req.body;
  let isEmailExists = await userModel.findOne({email});
  if(isEmailExists){
    return res.status(409).json({
      message:"User with this email already exists"
    })
  }
  let hash = crypto.createHash("md5").update(password).digest("hex");
  let user = await userModel.create({
    name,
    email,
    password:hash
  })
  let token = jwt.sign({
    id:user._id,
    email:user.email
  },process.env.JWT_SECRET)
  res.cookie("token",token);
  res.status(201).json({
    message:"User Created Successfully",
    user,
    token
  })
})

router.post("/login",async(req,res)=>{
  let {email,password} = req.body;
  let username = await userModel.findOne({email});
  if(!username){
    return res.status(400).json({
      message:"Username or password is incorrect"
    })
  }
  let hash = crypto.createHash("md5").update(password).digest("hex")
  if(username.password != hash){
    return res.status(400).json({
      message:"username or password incorrect"
    })
  }

  let token = jwt.sign({id:username._id,email:username.email},process.env.JWT_SECRET);
  res.cookie("token",token);
  res.status(200).json({
    message:"Login Successfull",
    username,
    token
  })
})

export default router;