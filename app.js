const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/passport');

const product = require('./routes/product.route'); // Imports routes for the products
const user = require('./routes/user.route');
const app = express();

// Set up mongoose connection

let dev_db_url = 'mongodb://riyazh1985:zxc#12345@ds161255.mlab.com:61255/productstutorial';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

app.use(passport.initialize());
app.use('/users', user);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
