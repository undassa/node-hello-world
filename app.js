var express = require('express');
var app = express();
var i = 10;

app.get('/', function (req, res) {
  console.log('request #',i);
    res.json({'status':'online', 'request':i});
  i++;
});

console.log('Hello world: demo test ');

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening');
});
