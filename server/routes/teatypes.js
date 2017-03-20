const express = require('express');
const knex = require('../db/connection');
const dotenv = require('dotenv').config();
const router = express.Router();



// Get all tea types route
router.get('/', function(req, res, next) {
  return knex('tea_type')
    .then(function(data) {
      res.json(data);
    });
});

// Get tea type by id
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  return knex('tea_type')
    .where('id', id)
    .first()
    .then(function(data) {
      res.send(data);
    });
});

module.exports = router;
