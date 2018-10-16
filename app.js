var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.connect(
  'mongodb://localhost/geemo',
  { useNewUrlParser: true }
);

var UserModel = require('./models/userModel'),
  PackageModel = require('./models/packageModel'),
  PaymentTypeModel = require('./models/paymentTypeModel'),
  ClientModel = require('./models/clientModel'),
  AddressTypeModel = require('./models/addressTypeModel'),
  ContactTypeModel = require('./models/contactTypeModel'),
  SubscriptionPlanModel = require('./models/subscriptionPlanModel'),
  CoachModel = require('./models/coachModel');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var userRouter = require('./routes/userRoutes')(UserModel),
  clientRouter = require('./routes/clientRoutes')(ClientModel),
  packageRouter = require('./routes/packageRoutes')(PackageModel),
  paymentTypeRouter = require('./routes/paymentTypeRoutes')(PaymentTypeModel),
  addressTypeRouter = require('./routes/addressTypeRoutes')(AddressTypeModel),
  contactTypeRouter = require('./routes/contactTypeRoutes')(ContactTypeModel),
  subscriptionPlanRouter = require('./routes/subscriptionPlanRoutes')(
    SubscriptionPlanModel
  ),
  coachRouter = require('./routes/coachRoutes')(CoachModel);

mongoose.connection.on('connected', function(err) {
  app.get('/', function(req, res) {
    res.send('welcome to geemo API!');
  });

  app.use('/api/User', userRouter);
  app.use('/api/Package', packageRouter);
  app.use('/api/PaymentType', paymentTypeRouter);
  app.use('/api/Client', clientRouter);
  app.use('/api/AddressType', addressTypeRouter);
  app.use('/api/ContactType', contactTypeRouter);
  app.use('/api/SubscriptionPlan', subscriptionPlanRouter);
  app.use('/api/Coach', coachRouter);

  var port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log('Running on PORT: ' + port);
  });
});
