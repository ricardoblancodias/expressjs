var express = require('express');
var app = express();
var port = process.argv[2];
var pug = process.argv[3];

app.set('view engine', 'pug');

app.get('/home', function(req,res){
  app.set('views', pug, 'templates');
  res.render('index', {date: new Date().toDateString()});
}).listen(port);

/* 'index.pug' FILE
    h1 Hello World
    p Today is #{date}.
*/

/* OFFICIAL SOLUTION
    var express = require('express')
    var app = express()
    app.set('view engine', 'pug')
    app.set('views', process.argv[3])
    app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
    })
    app.listen(process.argv[2])
*/