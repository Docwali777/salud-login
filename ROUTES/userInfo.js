const express = require('express');
const route = express.Router()
const passport = require('passport');

const User  = require('../Models/userInfo')

route.get('/', (req, res)=>{

  res.json('get user')
})

route.post('/', (req, res)=>{
  let {Email} = req.body
  console.log(Email);
User.register(new User({username: Email}), req.body.Password, (err, user)=>{
  if(err){
    console.log(err);
  }
  else {
    passport.authenticate('local')(req, res, ()=>{
      res.send('/')
    })
  }
})
})

module.exports = route
