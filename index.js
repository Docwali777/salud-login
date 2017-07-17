const express =  require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//MODELS


//ROUTES
const userInfo  = require('./ROUTES/userInfo')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(require('express-session')({
  secret: 'Little doggy Pancho',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

const User = require('./Models/userInfo')

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/api/user', userInfo)

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

if(process.env.NODE_ENV != 'production'){
  mongoose.connect('mongodb://localhost/salud', {useMongoClient: true})
  console.log('MONGODB is running in LOCALLY');
} else {
  mongoose.connect(process.env.MONGODB_URI , {useMongoClient: true})
  console.log('MONGODB is running PRODUCTION');
}


app.listen(PORT, ()=>{
  console.log("server running");
})
console.log(process.env.NODE_ENV);
