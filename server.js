var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 4000;

app.use('/', express.static(__dirname + '/src'));
app.use(express.static('node_modules'));


app.listen(port, function(){
  console.log('up and running on port ' + port);
});
