var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// Using static/data.txt file for http://localhost:3001/data.txt
app.use(express.static('static'));

// you can make a request to a database here and retrieve some data
// but for this example, we are using a static object of user information
var Users = {

  'David': {
    age: 52,
    occupation: 'Professor',
    hobby: 'Swimming'
  },

  'Robert': {
    age: 34,
    occupation: 'Engineer',
    hobby: 'Running'
  },

  'Jane': {
    age: 28,
    occupation: 'Nurse',
    hobby: 'Chess' 
  }

};

// route pages
app.get('/', function (req, res) {
  var usersArray = [];
  for (var i in Users) { usersArray.push(i); }
  res.render('index', { users: usersArray });
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

app.get('/user/:name/:topic/:show', function (req, res) {
  var check = Users[req.params.name];
  if (check) {
    var list;
    var books = ['book1', 'book2', 'book3', 'book4', 'bookA', 'bookB', 'bookC'];
    var movies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5', 'movie6'];
    if (req.params.topic === 'books') { 
      list = books.slice(0);
    }
    if (req.params.topic === 'movies') { 
      list = movies.slice(0);
    }
    res.render('user', { 
      name: req.params.name, 
      info: check, 
      list: list.slice(0, parseInt(req.params.show)) 
    });
  } else {
    res.send('User does not exist...');
  }
});

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});

