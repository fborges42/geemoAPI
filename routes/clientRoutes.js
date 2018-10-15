var express = require('express');

var routes = function(Client) {
  var clientRouter = express.Router();
  clientRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query._id) {
        query._id = req.query._id;
      }

      Client.find(query, function(error, clients) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(clients);
        }
      });
    })
    .post(function(req, res) {
      var client = new Client(req.body);
      client.save(function(err) {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).send(client);
      });
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  clientRouter.route('/:clientId').get(function(req, res) {
    Client.findById(req.params.clientId, function(error, client) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(client);
      }
    });
  });

  return clientRouter;
};

module.exports = routes;
