var express = require('express');

var routes = function(ContactType) {
  var contactTypeRouter = express.Router();

  contactTypeRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query._id) {
        query._id = req.query._id;
      }

      ContactType.find(query, function(error, contactTypes) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(contactTypes);
        }
      });
    })
    .post(function(req, res) {
      var contactType = new ContactType(req.body);
      contactType.save(function(err) {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).send(contactType);
      });
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  contactTypeRouter.route('/:contactTypeId').get(function(req, res) {
    ContactType.findById(req.params.contactTypeId, function(
      error,
      contactType
    ) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(contactType);
      }
    });
  });

  return contactTypeRouter;
};

module.exports = routes;
