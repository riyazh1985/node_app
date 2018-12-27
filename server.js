const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = 3000;

// Initialise express app
const app = express();
var contentArr = []


app.use(express.static('public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    fs.readFile('public/books.json', 'utf8', function(err, contents) {
        contentArr = contents;
        console.log(contentArr, contents);
        res.send(contents)
    });
    
})

app.post('/c', function(request, respond) {
    var body = '';
    filePath = __dirname + '/public/books.json';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
});

app.listen(port, function () {
    console.log("Server is running on " + port + " port");
});