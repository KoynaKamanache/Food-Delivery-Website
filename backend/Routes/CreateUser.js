const express = require('express');
const router = express.Router()
const User = require('../models/Users');
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const jwtSecret = "MynameIskoynaKamanacheiLiveInPune";


router.post("/createuser",[
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('password','Incorrect Password').isLength({ min: 6 })]
  ,async(req,res)=>{

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }

    const salt = await bcrypt.genSalt(12)
    const securePassword = await bcrypt.hash(req.body.password,salt)

    try{
        await User.create({
                name:req.body.name,
                password:securePassword,
                location:req.body.location,
                email:req.body.email
            })
    res.json({success:true}); 
    }
    catch(error){
        console.log(error);
        res.json({success:false})
    }

})




router.post("/loginuser",[
    body('email').isEmail(),
    body('password','Incorrect Password').isLength({ min: 6 })],
    async(req,res)=>{
    let email = req.body.email;
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() })
    }
    try{
        let userData =  await User.findOne({email});
        if(!userData){
            return res.status(400).json({ errors:"Try loggin in with correct credentials"}) 
            
        }
        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({ errors:"Try loggin in with correct credentials"}) 
        }

        const data = {
            user:{
                id:userData.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret)
        res.json({success:true, authToken:authToken})
    }
    catch(error){
        console.log(error);
        res.json({success:false})
    }

})

module.exports = router