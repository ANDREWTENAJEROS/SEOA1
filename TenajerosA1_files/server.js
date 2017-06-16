//server.js
//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'Tenajeros SEO assignment1')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'TenajerosA1.html'));
});
app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'views/about.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});