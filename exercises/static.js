var express = require('express');
var app = express();
var port = process.argv[2];
var path = process.argv[3];

app.use(express.static(path)).listen(port);

/* OFFICIAL SOLUTION

var path = require('path')
    var express = require('express')
    var app = express()
    
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    
    app.listen(process.argv[2])

*/