'use strict' 


const {Users}=require('../models/index')
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const middelSignUpAuth =async (req,res,next)=>{
    console.log('its work ')
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.record = await Users.create({
            username : req.body.username,
            password: req.body.password
        });
        console.log("record ------> ", req.record)
        next();
       
    } catch (e) {
        console.log(e);
        next('invalid')
    
    }
}


const basicAuthSingin =async (req,res,next)=>{

    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(' '); 
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded); 
        let [username, password] = decoded.split(":"); 
        req.username=username
       
       try {
      
           const user = await Users.findOne({ where: {username: req.username} });
           const valid = await bcrypt.compare(password, user.password);
           req.user=user
            if (valid) {
         
                next();
                
            } else {
              
                next('Invalid UserName and Password')
            }
       } catch(e) {
           console.log(e)
        next('error in signin')
      
       }
    }
}

module.exports={middelSignUpAuth,
    basicAuthSingin}