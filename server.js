var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve(__dirname)));
var port = process.env.PORT || 5000;

app.listen(port);
console.log('server started ' + port);

console.log(path.resolve(__dirname, 'node_modules'));
