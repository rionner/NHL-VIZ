var express = require('express');
var mongoose = require('mongoose');
var Team = require('../models/Team');
var router = express.Router();


// ===== ===== ===== ===== ======
// Validate Query Parameters
// ===== ===== ===== ===== ======
router.param('id', function(req, res, next, id) {
  console.log('+++++ Validating id Parameter +++++');
  // Validate id (decode?!)
  var teamId = req.params.id;
  req.teamId = teamId;
  next();
});

router.param('team', function(req, res, next, team) {
  console.log('+++++ Validating Team Parameter +++++');
  // Validate team name
  var team = req.params.team.toLowerCase();
  req.team = team;
  next();
});

router.param('year', function(req, res, next, year) {
  console.log('+++++ Validating Year Parameter +++++');
  // Validate that the year is numeric and within range
  var year = req.params.year;
  if (year > 1996 && year < 2016) {
    req.year = year;
  } else {
    res.json({ message: "Selected year is not in range. There is no data available for that season." });
  }
  next();
});

router.param('regular_season', function(req, res, next, regular_season) {
  console.log('+++++ Validating Regular Season Parameter +++++');
  // Validate boolean
  var regular_season = req.params.regular_season;
  if (typeof(regular_season)) {
    req.regular_season = regular_season;
  } else {
    res.json({ message: "Regular Season value not boolean." });
  }
  next();
});


// ===== ===== ===== ===== ======
// API Routes
// ===== ===== ===== ===== ======
router.route('/')
  .get(function(req, res, next) {
    Team.find().exec(function(err, teams) {
      if (err) {
        console.log(err);
      } else {
        res.send(teams);
      }
    });
  });


// ===== ===== ===== ===== ======
// PUT & DELETE METHODS NEED WORK
// ===== ===== ===== ===== ======
// ===== ===== ===== ===== ======
// Admin CRUD
// ===== ===== ===== ===== ======
// Get/Update/Delete
router.route('/admin/:id')
  .get(function(req, res, next) {
    var teamId = req.teamId;
    Team.find().where('_id', teamId).exec(function(err, team) {
      if (err) {
        console.log(err);
      } else {
        res.send(team);
      }
    });
  })
  .put(function(req, res, next) {
    var teamId = req.teamId;
    Team.find().where('_id', teamId).exec(function(err, team) {
      for (prop in req.body) {
        team[prop] = req.body[prop];
      }
      team.save().exec(function(err) {
        if (err) {
          console.log(err);
        }
        res.json({ message: 'Team updated.' });
      });
    });
  })
  .delete(function(req, res, next) {
    var teamId = req.teamId;
    Team.remove({ '_id': teamId }).exec(function(err, team) {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: 'Team Deleted.' });
      }
    });
  });


// ===== ===== ===== ===== ======
// Query Routes
// ===== ===== ===== ===== ======
// Get by team name
router.route('/:team')
  .get(function(req, res, next) {
    var team = req.team;
    Team.find().where('team', team).exec(function(err, team) {
      if (err) {
        console.log(err);
      } else {
        res.send(team);
      }
    });
  });

// Get by team name and year
router.route('/:team/:year')
  .get(function(req, res, next) {
    var team = req.team;
    var year = req.year;
    Team.find().where({ 'team': team, 'year1': year }).exec(function(err, team) {
      if (err) {
        console.log(err);
      } else {
        res.send(team);
      }
    });
  });

// Get by team name, year, and regular_season boolean
router.route('/:team/:year/:regular_season')
  .get(function(req, res, next) {
    var team = req.team;
    var year = req.year;
    var regular_season = req.regular_season;
    Team.find().where({ 'team': team, 'year1': year, 'regular_season': regular_season }).exec(function(err, team) {
        if (err) {
          console.log(err);
        } else {
          res.send(team);
        }
    });
  });


// ===== ===== ===== ===== ======
// Export Router
// ===== ===== ===== ===== ======
module.exports = router;
