var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/testing';

var db;

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  var user = req.body;
  console.log(user);
  var collection = db.collection('users');
  collection.insertOne(user, function(err, result) {
    console.log('User has been inserted.');
    res.render('index');
  });
});

// req.params.name
app.get('/user/:name', function (req, res) {
  var user = req.params.name;
  var collection = db.collection('users');
  collection.find({'name': user}).toArray(function(err, result) {
    if (result.length > 0) {
      var found = result[0];
      res.render('user', { name: found.name, info: found });
    } else {
      res.send('User does not exist...');
    }
  });
});

MongoClient.connect(url, function(err, database) {
  console.log('Connected to Mongo.');
  db = database;
  // what port to run server on
  app.listen(3001, function () {
    console.log('server started on port 3001');
  });
});


