var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('original-six', {
    title: 'Original Six',
    layout: 'layout',
  });
})

router.get('/blackhawks', function(req, res, next) {
  res.render('og-six-team', {
    team: 'Blackhawks',
    city: 'CHI',
    cssClass: 'blackhawks',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF'
  });
});

router.get('/bruins', function(req, res, next) {
  res.render('og-six-team', {
    team: 'Bruins',
    city: 'BOS',
    cssClass: 'bruins',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF'
  });
});

router.get('/canadiens', function(req, res, next) {
  res.render('og-six-team', {
    team: 'Canadiens',
    city: 'MTL',
    cssClass: 'canadiens',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF'
  });
});

router.get('/mapleleafs', function(req, res, next) {
  res.render('og-six-team', {
    team: 'maple leafs',
    city: 'TOR',
    cssClass: 'maple-leafs',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249'
  });
});

router.get('/rangers', function(req, res, next) {
  res.render('og-six-team', {
    team: 'Rangers',
    city: 'NYC',
    cssClass: 'rangers',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF'
  });
});

router.get('/redwings', function(req, res, next) {
  res.render('og-six-team', {
    team: 'red wings',
    city: 'DET',
    cssClass: 'red-wings',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200'
  });
});

module.exports = router;
