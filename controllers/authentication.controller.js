const User = require('../models/user.model');
const passport = require('passport');


module.exports.register = function(req, res) {
    var user = new User()
    user.name = req.body.name;
    user.email = req.body.email;
  
    user.setPassword(req.body.password);
  
    user.save(function(err) {
      var token;
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
  };

  module.exports.login = function(req, res) {
    console.log('api is hit by client', req.body)
    passport.authenticate('local', function(err, user, info){
      var token;
      console.log('inside authenticate')
      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err);
        return;
      }
  
      // If a user is found
      if(user){
        token = user.generateJwt();
        res.status(200);
        res.json({
          "token" : token
        });
      } else {
        // If user is not found
        res.status(401).json(info);
      }
    })(req, res);
  
  };