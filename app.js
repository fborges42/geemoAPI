var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.connect('mongodb://testing:123testing@ds131137.mlab.com:31137/geemo');
var Client = require('./models/clientModel');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var clientRouter = require('./routes/clientRoutes')(Client);

mongoose.connection.on('connected', function(err) {

  app.get('/', function(req, res) {
    res.send('welcome to geemo API!');
  });

  app.use('/api/Clients', clientRouter);
  app.use('/api/Clients', clientRouter);


  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log('Running on PORT: ' + port);
  });
});
