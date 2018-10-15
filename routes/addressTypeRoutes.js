var express = require('express');

var routes = function(AddressType) {
  var addressTypeRouter = express.Router();

  addressTypeRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query._id) {
        query._id = req.query._id;
      }

      AddressType.find(query, function(error, addressTypes) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(addressTypes);
        }
      });
    })
    .post(function(req, res) {
      var addressType = new AddressType(req.body);
      addressType.save(function(err) {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).send(addressType);
      });
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  addressTypeRouter.route('/:addressTypeId').get(function(req, res) {
    AddressType.findById(req.params.addressTypeId, function(
      error,
      addressType
    ) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(addressType);
      }
    });
  });

  return addressTypeRouter;
};

module.exports = routes;
