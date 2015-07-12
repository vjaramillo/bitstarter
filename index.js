var express = require('express')
var app = express.createServer(express.logger());
var fs = require('fs');
var content;

app.get('/', function(request, response) {
    content = fs.readFileSync('indice.html','utf8'); 
    Response.send('content')
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on" + port);
})
