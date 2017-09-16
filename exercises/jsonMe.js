var port = process.argv[2];
var path = process.argv[3];
var fs = require('fs');
var express = require('express');
var app = express();

fs.readFile(path, function(err, data){
  if(err) return err;
  //console.log(data.toString());
  app.get('/books',function(req,res){
    res.json(JSON.parse(data.toString()));
  }).listen(port);
   });

/* OFFICIAL SOLUTION

    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.sendStatus(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.sendStatus(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
    
*/    
