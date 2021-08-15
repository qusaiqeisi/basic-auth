'use strict';

const express = require('express');
const errorHandller=require('./error-handller/500');
const pageNotFound=require('./error-handller/404');


const app = express();
const {basicAuthSingin,middelSignUpAuth }=require('./auth/auth.middelwear')
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello from outside qusai')
})



app.post('/signup',middelSignUpAuth ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuthSingin, (req, res, next)=> {

 res.status(200).json({username: req.username ,id :req.user.id})
    
});


app.use('*',pageNotFound)
app.use(errorHandller)



module.exports={
    app 
    
    
}