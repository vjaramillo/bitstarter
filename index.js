var express = require('express')
var app = express();
var fs = require('fs');
var content;

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    content = fs.readFileSync('indice.html', 'utf8');
    response.send(content);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
