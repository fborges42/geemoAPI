var express = require('express');

var routes = function(User) {
  var userRouter = express.Router();
  userRouter
    .route('/')
    .get(function(req, res) {
      var query = {};
      if (req.query._id) {
        query._id = req.query._id;
      }

      User.find(query, function(error, users) {
        if (error) {
          res.status(500).send(error);
        } else {
          res.json(users);
        }
      });
    })
    .post(function(req, res) {
      var user = new User(req.body);
      user.save();

      res.status(201).send(user);
    })
    .put(function(req, res) {})
    .delete(function(req, res) {});

  userRouter.route('/:userId').get(function(req, res) {
    User.findById(req.params.userId, function(error, user) {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(user);
      }
    });
  });

  return userRouter;
};

module.exports = routes;
