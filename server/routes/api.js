var express = require('express');
var mongoose = require('mongoose');
var Team = require('../models/Team');
var Color = require('../models/Color');
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
  var team = req.params.team.replace(/-/g, ' ').toLowerCase();
  req.team = team;
  next();
});

router.param('year', function(req, res, next, year) {
  console.log('+++++ Validating Year Parameter +++++');
  // Validate that the year is numeric and within range
  var year = req.params.year;
  if ( 1996 < year < 2016) {
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
// PUT & DELETE METHODS // NEED WORK
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
// Get data for all Original Six Teams
router.route('/six/')
  .get(function(req, res, next) {
    var originalSix = {
      blackhawks: [],
      bruins: [],
      canadiens: [],
      mapleLeafs: [],
      rangers: [],
      redWings: [],
      teamColors: []
    };

    Team.find().where({ '$or': [{ 'team': 'blackhawks'}, { 'team': 'bruins' }, { 'team': 'canadiens' }, { 'team': 'maple leafs' }, { 'team': 'rangers' }, { 'team': 'red wings' }]}).exec(function(err, teams) {
      if (err) {
        console.log(err);
      } else {
        for (var i = 0; i < teams.length; i++) {
          if (teams[i].team === 'blackhawks') {
            originalSix.blackhawks.push(teams[i]);
          } else if (teams[i].team === 'bruins') {
            originalSix.bruins.push(teams[i]);
          } else if (teams[i].team === 'canadiens') {
            originalSix.canadiens.push(teams[i]);
          } else if (teams[i].team === 'maple leafs') {
            originalSix.mapleLeafs.push(teams[i]);
          } else if (teams[i].team === 'rangers') {
            originalSix.rangers.push(teams[i]);
          } else if (teams[i].team === 'red wings') {
            originalSix.redWings.push(teams[i]);
          }
        }
      }
    }).then(function() {
      Color.find().where({ '$or': [{ 'team': 'blackhawks'}, { 'team': 'bruins' }, { 'team': 'canadiens' }, { 'team': 'maple-leafs' }, { 'team': 'rangers' }, { 'team': 'red-wings' }]}).exec(function(err, colors) {
          if (err) {
            console.log(err);
          } else {
            for (var i = 0; i < colors.length; i++) {
                originalSix.teamColors.push(colors[i]);
            }
            res.send(originalSix);
          }
        });
      });
  });

// Get by team name
router.route('/:team')
  .get(function(req, res, next) {
    var team = req.team;

    Team.find().where('team', team).exec(function(err, team) {
      var teamData = [];
      var teamStats = [];
      if (err) {
        console.log(err);
      } else {
        teamStats.push(team);
        teamData.push(teamStats);
      }
    }).then(function(teamData) {
      Color.find().where('team', team).exec(function(err, colors) {
        if (err) {
          console.log(err);
        } else {
          teamData.push({ teamColors: colors });
          res.send(teamData);
        }
      });
    });
  });

// Get by team name, and regular_season boolean
router.route('/:team/:regular_season')
  .get(function(req, res, next) {
    var team = req.team;
    var regular_season = req.regular_season;
    Team.find().where({ 'team': team, 'regular_season': regular_season }).exec(function(err, team) {
        if (err) {
          console.log(err);
        } else {
          res.send(team);
        }
    });
  });

// Get by team name, year, and regular_season boolean
router.route('/:team/:regular_season/:year')
  .get(function(req, res, next) {
    var team = req.team;
    var regular_season = req.regular_season;
    var year = req.year;
    Team.find().where({ 'team': team, 'regular_season': regular_season, 'year1': year }).exec(function(err, team) {
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
