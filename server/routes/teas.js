const express = require('express');
const knex = require('../db/connection');
const dotenv = require('dotenv').config();
const router = express.Router();




// Update a tea type

// Get all individual teas routes
router.get('/', function(req, res, next) {
  console.log('here are all the individual teas');
  return knex ('tea')
    .then(function(data) {
      res.json(data);

  });
});

// Post a new tea
router.post('/', function(req, res, next) {
  let teaObject = {
    name: req.body.name,
    chinese_name: req.body.chinese_name,
    tea_type_id: teaSwitch(req.body.tea_type_id),
    description: req.body.description,
    flavor: req.body.flavor,
    science: req.body.science,
    process: req.body.process,
    history: req.body.history,
    lore: req.body.lore,
    pic_url: req.body.pic_url,
    lat: req.body.lat, // This needs some logic to grab the lat long from google maps query string
    long: req.body.long
  };
  console.log('Posting shit');
  return knex('tea')
    .insert(teaObject)
    .then(function (data) {
      res.send('Success');
    });
});

// Switch for tea type from frontend
function teaSwitch (input) {
  switch (input) {
    case "White":
    return 1;

    case "Yellow":
    return 2;

    case "Green":
    return 3;

    case "Oolong":
    return 4;

    case "Red":
    return 5;

    case "Puer":
    return 6;

    default:
    return null;
  }
}

// Get a single tea by id
router.get('/:id', function (req, res, next) {
  let id = req.params.id;
  return knex('tea')
    .where('id', id)
    .first()
    .then(function(data) {
      res.json(data);
    });
});

// Update a tea
router.put('/:id', function (req, res, next) {
  let id = req.params.id;
  let teaObject = {
    name: req.body.name,
    chinese_name: req.body.chinese_name,
    tea_type_id: teaSwitch(req.body.tea_type_id),
    description: req.body.description,
    flavor: req.body.flavor,
    science: req.body.science,
    process: req.body.process,
    history: req.body.history,
    lore: req.body.lore,
    pic_url: req.body.pic_url,
    lat: req.body.lat, // This needs some logic to grab the lat long from google maps query string
    long: req.body.long
  };
  return knex('tea')
          .where('id', id)
          .update(teaObject)
          .then(function(data) {
            res.json(data);
          });
});

module.exports = router;
