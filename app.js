var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://testing:123testing@ds131137.mlab.com:31137/geemo');
var Client = require('./models/clientModel');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || 3000;
var geemoRouter = express.Router();

mongoose.connection.on("connected", function (err) {
    geemoRouter.route('/Clients')
        .get(function (req, res) {

            var query = {};
            if (req.query.user_id) {
                query.user_id = req.query.user_id;
            }

            Client.find(query, function (error, clients) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(clients);
                }
            });
        })
        .post(function (req, res) {
            var client = new Client(req.body);

            client.save();
            res.status(201).send(client);
        })
        .put();

    geemoRouter.route('/Clients/:clientId')
        .get(function (req, res) {
            Client.findById(req.params.clientId, function (error, client) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.json(client);
                }
            });
        });


    app.use('/api', geemoRouter);
    app.get('/', function (req, res) {
        res.send('welcome to my geemo API!');
    });

    //start
    app.listen(port, function () {
        console.log('Running on PORT: ' + port);
    });
});