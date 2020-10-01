const express = require("express");
const passport=require("passport");
const mongoose=require("mongoose");
const subs=mongoose.model('subs');
const app = express();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dev=require('../config/dev.js');


// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user.id); 
   // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    subs.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new GoogleStrategy({
    clientID:dev.googleClientId,
    clientSecret:dev.googleSecretId,
    callbackURL: "callback"
  },
  function(accessToken, refreshToken, profile, cb) {
   console.log(accessToken);
   console.log(refreshToken);
   console.log(profile);
   subs.findOne({googleId:profile.id}).then((existingUser)=>
   {
   		if(existingUser)
   		{
   				cb(null,existingUser);
   		}
   		else
   		{
   			 new subs({googleId:profile.id}).save().then((user)=>
   			 {
   			 	cb(null,user);
   			 })


   		}
   })
  
  }
));