express = require('express'),
app = express(),
path = require('path'),
PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.send(index.html);
});

app.listen( PORT, function(err){
  console.log(err || "Listening on port " + PORT);
});