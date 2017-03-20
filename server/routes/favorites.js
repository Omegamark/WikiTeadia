const express = require('express');
const knex = require('../db/connection');
const dotenv = require('dotenv').config();
const router = express.Router();

// Get all favorites
router.get('/', function (req, res, next) {
  return knex('profile_favorite')
    .then(function(data) {
      res.json(data);
    });
});

// Get a favorite or described tea by id
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  return knex('profile_favorite')
    .where('id', id)
    .first()
    .then(function(data) {
      res.json(data);
    });
});

// Post a personal description or favorite for a tea
router.post('/', function(req, res, next) {
  let favoriteObject = {
    profile_id: req.body.profile_id,
    tea_id: req.body.tea_id,
    description: req.body.description,
    favorite: req.body.favorite
  };
  return knex('profile_favorite')
    .insert(favoriteObject)
    .then(function(data) {
      res.send('success');
    });
});


// Update a description & favorite
router.put('/:id', function (req, res, next) {
  let id  = req.params.id;
  let favoriteObject = {
    profile_id: req.body.profile_id,
    tea_id: req.body.tea_id,
    description: req.body.description,
    favorite: req.body.favorite
  };
  return knex('profile_favorite')
    .where('id', id)
    .update(favoriteObject)
    .then(function(data) {
      res.json(data);
    });
});


module.exports = router;
