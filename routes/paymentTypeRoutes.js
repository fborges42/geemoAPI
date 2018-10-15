var express = require('express');

var routes = function(PaymentType) {
  var paymentTypeRouter = express.Router();

  paymentTypeRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query.user_id) {
        query.user_id = req.query.user_id;
      }

      PaymentType.find(query, function(error, paymentType) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(paymentType);
        }
      });
    })
    .post(function(req, res) {
      var paymentType = new PaymentType(req.body);
      paymentType.save(function(err) {
        if (err) {
          res.status(400).send(err.message);
        }
        res.status(201).send(paymentType);
      });
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  paymentTypeRouter.route('/:paymentTypeId').get(function(req, res) {
    PaymentType.findById(req.params.paymentTypeId, function(
      error,
      paymentType
    ) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(paymentType);
      }
    });
  });

  return paymentTypeRouter;
};

module.exports = routes;
