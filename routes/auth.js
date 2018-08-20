/**
 * # Auth API
 * @description This is the API passport authentication
 * @author Michael McVeigh
 */

//REQUIRE MODULES
const passport = require('passport');
const express = require('express')
const router = express.Router()

//REQUIRE FILES
const controllers = require('../controllers')

router.post('/login', (req, res, next) => {
  passport.authenticate('local-login', (err, user, info) => {
    console.log(user)
    if (user) {
      return res.json(user)
    }
    if (info) {
      return res.json(info)
    }
    res.status(401).send({message: info})
    // res.json({message: 'success'})
  })(req, res, next);
});


router.post('/signup', (req, res, next) => {
  passport.authenticate('local-signup', (err, user, info) => {
    console.log(err)
    if (user) {
      console.log(user)
      return res.json(user)
    }
    if (info) {
      console.log(info)
      // For some reason I couldn't my error message
      // with a 400 status code
      return res.json(info)
    }
    return res.status(500).end()
  })(req, res, next);
});

router.get('/googleAuth', (req, res, next) => {
  console.log("authorizing google")
  passport.authenticate('google', {
     scope:["https://www.googleapis.com/auth/plus.login",
     "https://www.googleapis.com/auth/plus.profile.emails.read"
    ]
  })(req,res,next);
});

router.get('/google/callback', (req, res, next) => {
  console.log("callback initiated");
  passport.authenticate('google', {
    failureRedirect: "/#/login",
    successRedirect: "/"
  })(req, res, next)
})

const googleReturn = (req, res, next) => {

};

const logout = (req, res, next) => {
  console.log('LOGGING OUT!');
  req.logout();
  res.redirect('/');
};

module.exports = router;
