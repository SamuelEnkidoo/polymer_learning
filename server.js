var PORT = process.env.PORT;

// Application packages
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Application configuration
var app = express();
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client')));

app.listen(PORT);
