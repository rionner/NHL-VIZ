var express = require('express');
var mongoose = require('mongoose');
var Team = require('../models/Team');
var router = express.Router();


// ===== ===== ===== ===== ======
// Validate Query Parameters
// ===== ===== ===== ===== ======
router.param('team', function(req, res, next, team) {
  console.log('+++++ Validating Team Parameter +++++');
  // Normalize / Validate team name
  // Title Case + Spaces?
  req.team = team;
  next();
});

router.param('year', function(req, res, next, year) {
  console.log('+++++ Validating Year Parameter +++++');
  // Validate that the year is numeric and within range
  // Get year data
  req.year = year;
  next();
});

router.param('regular_season', function(req, res, next, regular_season) {
  console.log('+++++ Validating Regular Season Parameter +++++');
  // Validate
  // Get playoff game data
  req.regular_season = regular_season;
  next();
});


// ===== ===== ===== ===== ======
// CRUD API Routes
// ===== ===== ===== ===== ======

// Get all team data
router.get('/', function(req, res, next) {
  // Get all team data
  var findTeams = Team.find().exec(function(err, teams) {
    res.send(teams);
  });
});

// Team specific routes
// Get by team name
router.get('/:team', function(req, res, next) {
  team = req.team;
  Team.find().where('team', team).exec(function(err, team) {
    res.send(team);
  });
});

// Get by team name and year
router.get('/:team/:year', function(req, res, next) {
  team = req.team;
  year = req.year;
  Team.find().where({'team': team, 'year1': year}).exec(function(err, team) {
    res.send(team);
  });
});

// Get by team name, year, and regular_season boolean
router.get('/:team/:year/:regular_season', function(req, res, next) {
  team = req.team;
  year = req.year;
  regular_season = req.regular_season;
  Team.find().where({'team': team, 'year1': year, 'regular_season': regular_season}).exec(function(err, team) {
    res.send(team);
  });
});


// Update Specific Team Data

// Delete Specific Team Data



module.exports = router;


// ===== ===== ===== ===== ======

// Get by year
// router.get('/:year', function(req, res, next) {
//   // Send specified year data
//   year = req.year;
//   var findYears = Team.find().where('year1', year).exec(function(err, year) {
//     res.send(year);
//   });
// });


// router.get('/:playoffs', function(req, res, next) {
//   // Send specified playoff data
// });

