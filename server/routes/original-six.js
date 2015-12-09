var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var data = {
    title: 'Original Six',
    layout: 'og-six-layout'
  };
  res.render('original-six', data);
})

router.get('/blackhawks', function(req, res, next) {
  var data = {
    team: 'Blackhawks',
    city: 'CHI',
    cssClass: 'blackhawks',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF',
    layout: 'og-six-layout',
  };
  res.render('og-six-team', data);
});

router.get('/bruins', function(req, res, next) {
  var data = {
    team: 'Bruins',
    city: 'BOS',
    cssClass: 'bruins',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF',
    layout: 'og-six-layout'
  };
  res.render('og-six-team', data);
});

router.get('/canadiens', function(req, res, next) {
  var data = {
    team: 'Canadiens',
    city: 'MTL',
    cssClass: 'canadiens',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF',
    layout: 'og-six-layout'
  };
  res.render('og-six-team', data);
});

router.get('/mapleleafs', function(req, res, next) {
  var data = {
    team: 'maple leafs',
    city: 'TOR',
    cssClass: 'maple-leafs',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249',
    layout: 'og-six-layout'
  };
  res.render('og-six-team', data);
});

router.get('/rangers', function(req, res, next) {
  var data = {
    team: 'Rangers',
    city: 'NYC',
    cssClass: 'rangers',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF',
    layout: 'og-six-layout'
  };
  res.render('og-six-team', data);
});

router.get('/redwings', function(req, res, next) {
  var data = {
    team: 'red wings',
    city: 'DET',
    cssClass: 'red-wings',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200',
    layout: 'og-six-layout'
  };
  res.render('og-six-team', data);
});

module.exports = router;
