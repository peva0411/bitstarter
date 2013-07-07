var express = require('express');
var fs = require('fs');
var path = require('path');

 
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var filePath =  path.join(__dirname, '../index.html');
    var file = fs.readFileSync(filePath);
   
    response.send(file.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
