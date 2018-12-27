
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/profile');
const auth_controller = require('../controllers/authentication.controller');


//localhost:3000/users/register



router.post('/register', function(req, res){auth_controller.register(req, res)});

router.post('/login', function(req, res){
    console.log('coming here')
    auth_controller.login(req, res)
});

router.post('/profile/USERID', function(req, res){user_controller.user_details});

// a simple test url to check that all of our files are communicating correctly.
//router.get('/test', product_controller.test);
module.exports = router;

