
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


//localhost:3000/products/create
router.post('/create', function(req, res){product_controller.product_create});


//localhost:3000/products/PRODUCT_ID
router.get('/:id', product_controller.product_details);


//localhost:3000/products/PRODUCT_ID/update
router.put('/:id/update', product_controller.product_update);


//localhost:3000/products/PRODUCT_ID/delete
router.delete('/:id/delete', product_controller.product_delete);


//router.post('/register', product_controller.product_create);

//router.post('/login', product_controller.product_create);

//router.post('/profile/USERID', product_controller.product_create);

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

