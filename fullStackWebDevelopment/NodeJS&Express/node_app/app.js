var express = require('express');
var app = express();

// route pages
app.get('/', function (req, res) {
  res.send('Main page is up and running!');
});

app.get('/user', function (req, res) {
  res.send('TODO: update this page...');
});

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});