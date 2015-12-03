var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status('ok').send('original six', {
    title: 'Original Six',
  })
})

router.get('/blackhawks', function(req, res, next) {
  res.status('ok').send('blackhawks', {
    team: 'blackhawks',
    city: 'CHI',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF'
  });
  res.render('team');
});

router.get('/bruins', function(req, res, next) {
  res.status('ok').send('bruins', {
    team: 'bruins',
    city: 'BOS',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF'
  });
});

router.get('/canadiens', function(req, res, next) {
  res.status('ok').send('canadiens', {
    team: 'canadiens',
    city: 'MTL',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF'
  });
});

router.get('/mapleleafs', function(req, res, next) {
  res.status('ok').send('mapleleafs', {
    team: 'maple leafs',
    city: 'TOR',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249'
  });
});

router.get('/rangers', function(req, res, next) {
  res.status('ok').send('rangers', {
    team: 'rangers',
    city: 'NYC',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF'
  });
});

router.get('/redwings', function(req, res, next) {
  res.status('ok').send('redwings', {
    team: 'red wings',
    city: 'DET',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200'
  });
});

module.exports = router;
