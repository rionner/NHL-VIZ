var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', {
    title: 'Original Six v2.0'
  });
});

router.get('/blackhawks', function(req, res, next) {
  res.send('blackhawks', {
    title: 'Blackhawks',
    city: 'CHI',
    team: 'blackhawks',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF'
  });
});

router.get('/bruins', function(req, res, next) {
  res.send('bruins', {
    title: 'Bruins',
    city: 'BOS',
    team: 'bruins',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF'
  });
});

router.get('/canadiens', function(req, res, next) {
  res.send('canadiens', {
    title: 'Canadiens',
    city: 'MTL',
    team: 'canadiens',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF'
  });
});

router.get('/mapleleafs', function(req, res, next) {
  res.send('mapleleafs', {
    title: 'Maple Leafs',
    city: 'TOR',
    team: 'mapleleafs',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249'
  });
});

router.get('/rangers', function(req, res, next) {
  res.send('rangers', {
    title: 'Rangers',
    city: 'NYC',
    team: 'rangers',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF'
  });
});

router.get('/redwings', function(req, res, next) {
  res.send('redwings', {
    title: 'Red Wings',
    city: 'DET',
    team: 'redwings',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200'
  });
});

module.exports = router;
