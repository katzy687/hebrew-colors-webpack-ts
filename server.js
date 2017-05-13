var express = require('express');
var path = require('path');
var app = express();
var open = require('open');

// for now just serve up everything
app.use(express.static(path.resolve(__dirname)));

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('server started on port ' + port);
  console.log('Launching Browser!');
  open("http:localhost:" + port);
});
