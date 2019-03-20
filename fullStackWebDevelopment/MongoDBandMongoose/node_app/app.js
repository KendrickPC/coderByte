var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing-mongoose', { 
  useCreateIndex: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

// Mongoose Deprecation Warnings Fix Attempt.
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// For Express.
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Schema.
var userSchema = mongoose.Schema({
  name: String,
  age: Number,
  occup: String,
  hobby: String 
});

// Create a model based off of schema.
// Each instance of model is a 'document' in our collection.
var User = mongoose.model('User', userSchema);

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
  var user = new User ({
    name: req.body.name,
    age: req.body.age,
    occup: req.body.occup,
    hobby: req.body.hobby
  });
  user.save(function(err, result) {
    console.log('User inserted!', result);
    res.render('index');
  });
});

app.get('/list', function(req, res) {
  User.find({}, function(err, result){
    res.render('list', {users: result});
  });
});

// req.params.name
app.get('/user/:name', function (req, res) {
  User.find({'name': req.params.name}, function(err, result) {
    if (result.length > 0) {
      res.render('user', {name: result[0].name, info: result[0] });
    } else {
      res.send('User does not exist...');
    }
  });
});

// Get route for editing.
app.get('/user/:name/edit', function (req, res) {
  User.find({'name': req.params.name}, function(err, result) {
    if (result.length > 0) {
      res.render('edit', {name: result[0].name, info: result[0] });
    } else {
      res.send('User does not exist...');
    }
  });
});

// Post route for editing.
app.post('/user/edit', function (req, res) {
  User.updateOne({'name': req.body.name}, {
    age: req.body.age,
    occup: req.body.occup,
    hobby: req.body.hobby
  }, function(err, result) {
    res.redirect('/user/' + req.body.name);
  });
});

app.post('/user/delete', function (req, res) {
  User.deleteOne({'name': req.body.name}, function(err, result) {
    res.redirect('/list');
  });
});

db.once('open', function() {
  app.listen(3001, function() {
    console.log('server started on port 3001');
  });
});
