var express = require('express');

var routes = function(Coach) {
  var coachRouter = express.Router();

  coachRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query.user_id) {
        query.user_id = req.query.user_id;
      }

      Coach.find(query, function(error, coaches) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(coaches);
        }
      });
    })
    .post(function(req, res) {
      var coach = new Coach(req.body);
      coach.save();

      res.status(201).send(coach);
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  coachRouter.route('/:coachId').get(function(req, res) {
    Coach.findById(req.body.coachId, function(error, coach) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(coach);
      }
    });
  });

  return coachRouter;
};

module.exports = routes;
