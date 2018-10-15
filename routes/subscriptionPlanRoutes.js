var express = require('express');

var routes = function(SubscriptionPlan) {
  var subscriptionPlanRouter = express.Router();

  subscriptionPlanRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query.user_id) {
        query.user_id = req.query.user_id;
      }

      SubscriptionPlan.find(query, function(error, subscriptionPlan) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(subscriptionPlan);
        }
      });
    })
    .post(function(req, res) {
      var subscriptionPlan = new SubscriptionPlan(req.body);
      subscriptionPlan.save();

      res.status(201).send(subscriptionPlan);
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  subscriptionPlanRouter.route('/:id').get(function(req, res) {
    SubscriptionPlan.findById(req.params.id, function(error, subscriptionPlan) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(subscriptionPlan);
      }
    });
  });

  return subscriptionPlanRouter;
};

module.exports = routes;
