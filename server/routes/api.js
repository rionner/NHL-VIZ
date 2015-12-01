var express = require('express');
var mongoose = require('mongoose');
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
  var findTeams = Team.find(function(err, team) {
    res.send(team);
  });
});

router.get('/:team', function(req, res, next) {
  // Send specified team data
  var team = req.params.team;
  var findTeam = Team.find(function(err, team) {
    res.send(team);
  })
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
});


router.get('/blackhawks', function(req, res, next) {
  res.status('ok').send('blackhawks', {
    title: 'Blackhawks',
    city: 'CHI',
    team: 'blackhawks',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF'
  });
});

router.get('/bruins', function(req, res, next) {
  res.status('ok').send('bruins', {
    title: 'Bruins',
    city: 'BOS',
    team: 'bruins',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF'
  });
});

router.get('/canadiens', function(req, res, next) {
  res.status('ok').send('canadiens', {
    title: 'Canadiens',
    city: 'MTL',
    team: 'canadiens',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF'
  });
});

router.get('/mapleleafs', function(req, res, next) {
  res.status('ok').send('mapleleafs', {
    title: 'Maple Leafs',
    city: 'TOR',
    team: 'mapleleafs',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249'
  });
});

router.get('/rangers', function(req, res, next) {
  res.status('ok').send('rangers', {
    title: 'Rangers',
    city: 'NYC',
    team: 'rangers',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF'
  });
});

router.get('/redwings', function(req, res, next) {
  res.status('ok').send('redwings', {
    title: 'Red Wings',
    city: 'DET',
    team: 'redwings',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200'
  });
});


app.use('/api', router);
