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

      ContactType.find(query, function(error, contactTypees) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(contactTypees);
        }
      });
    })
    .post(function(req, res) {
      var contactType = new ContactType(req.body);
      contactType.save();

      res.status(201).send(contactType);
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  contactTypeRouter.route('/:contactTypeId').get(function(req, res) {
    ContactType.findById(req.params.contactTypeId, function(error, contactType) {
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
