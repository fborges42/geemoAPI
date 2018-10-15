var express = require('express');

var routes = function(Package) {
  var packageRouter = express.Router();

  packageRouter
    .route('/Package')
    .get(function(req, res) {
      var query = {};
      if (req.query.user_id) {
        query.user_id = req.query.user_id;
      }

      Package.find(query, function(error, package) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(package);
        }
      });
    })
    .post(function(req, res) {
      var package = new Package(req.body);
      package.save();

      res.status(201).send(package);
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  packageRouter.route('/:packageId').get(function(req, res) {
    Package.findById(req.params.packageId, function(error, package) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(package);
      }
    });
  });

  return packageRouter;
};

module.exports = routes;
