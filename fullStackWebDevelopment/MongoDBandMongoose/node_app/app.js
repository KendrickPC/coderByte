var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/testing';
var db;

app.set('view engine', 'ejs');

// Using static/data.txt file for http://localhost:3001/data.txt
app.use(express.static('static'));


// route pages
app.get('/', function (req, res) {
  res.render('index')
});

// req.params.name
app.get('/user/:name', function (req, res) {
  var check = Users[req.params.name];
  if (check) {
    res.render('user', { name: req.params.name, info: check });
  } else {
    res.send('User does not exist...');
  }
});



MongoClient.connect(url, function(err, database) {
  console.log('Connected to Mongo.');
  db = database;
  // what port to run server on
  app.listen(3001, function () {
    console.log('server started on port 3001');
  });
});


