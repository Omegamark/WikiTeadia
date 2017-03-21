const express = require('express');
const cors = require('cors')
const knex = require('../db/connection');
const dotenv = require('dotenv').config();
const router = express.Router();

/* GET home page. */

// Get all profiles route
router.get('/profiles', function(req, res, next) {
    console.log('hitting the route');
  return knex('profile')
    .then(function(data) {
      res.json(data);
    });
});

// Get user by id route
router.get('/profiles/:id', function (req, res, next) {
  let id = req.params.id;
  return knex('profile')
    .where('id', id)
    .first()
    .then(function(data) {
      res.json(data);
    });
});

// Post a new profile
router.post('/profiles', function (req, res, next) {
  let profileObject = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  return knex('profile')
            .insert(profileObject)
            .then(function(data) {
              // This data is from SQL and doesn't make sense.
              res.json(data);
            });
});

// Update a profile
router.put('/profiles/:id', function (req, res, next) {
  let id = req.params.id;
  let profileObject = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  return knex('profile')
          .where('id', id)
          .update(profileObject)
          .then(function(data) {
            res.json(data);
          });
});

module.exports = router;
