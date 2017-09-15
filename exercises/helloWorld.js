var port = process.argv[2];
var express = require('express');
var app = express();

app.get('/home', function(req,res){
  res.end('Hello World!');
}).listen(port);

/* OFFICIAL SOLUTION

var express = require('express')
    var app = express()
    app.get('/home', function(req, res) {
      res.end('Hello World!')
    })
    app.listen(process.argv[2])
*/