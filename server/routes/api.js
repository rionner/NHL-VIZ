var express = require('express');
var router = express.Router();

// Validate Parameters
router.param('team', function(req, res, next, team) {
  // Validate that the team is one of the OG-6
  // Get team data
  // req.team = team;
  // next();
});

router.param('year', function(req, res, next, year) {
  // Validate that the year is numeric and within range
  // Get year data
  // req.year = year;
  // next();
});

router.param('playoffs', function(req, res, next, year) {
  // Validate
  // Get playoff game data
  // req.playoffs = playoffs;
  // next();
});


router.get('/', function(req, res, next) {
  // Get all team data
});

router.get('/:team', function(req, res, next) {
  // Send specified team data
});

router.get('/:year', function(req, res, next) {
  // Send specified year data
});

router.get('/:playoffs', function(req, res, next) {
  // Send specified playoff data
});

router.get('/:team/:year', function(req, res, next) {
  // Send specified team data for the specified year
});

router.get('/:team/:year/:playoffs', function(req, res, next) {
  // Send specified team data for the specified year during playoffs
})
