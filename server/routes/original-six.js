var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var data = {
    title: 'Original Six',
  };
  res.render('og_six_index', data);
})

router.get('/blackhawks', function(req, res, next) {
  var data = {
    title: 'Chicago Blackhawks',
    team: 'Blackhawks',
    city: 'CHI',
    cssClass: 'blackhawks',
    primaryColor: '#E3263A',
    secondaryColor: '#000',
    tertiaryColor: '#FFF'
  };
  res.render('og_six_team', data);
});

router.get('/bruins', function(req, res, next) {
  var data = {
    title: 'Boston Bruins',
    team: 'Bruins',
    city: 'BOS',
    cssClass: 'bruins',
    primaryColor: '#000',
    secondaryColor: '#FFC422',
    tertiaryColor: '#FFF'
  };
  res.render('og_six_team', data);
});

router.get('/canadiens', function(req, res, next) {
  var data = {
    title: 'Montreal Canadiens',
    team: 'Canadiens',
    city: 'MTL',
    cssClass: 'canadiens',
    primaryColor: '#BF2F38',
    secondaryColor: '#213770',
    tertiaryColor: '#FFF'
  };
  res.render('og_six_team', data);
});

router.get('/mapleleafs', function(req, res, next) {
  var data = {
    title: 'Toronto Maple Leafs',
    team: 'Maple Leafs',
    city: 'TOR',
    cssClass: 'maple-leafs',
    primaryColor: '#003777',
    secondaryColor: '#FFF',
    tertiaryColor: '#002249'
  };
  res.render('og_six_team', data);
});

router.get('/rangers', function(req, res, next) {
  var data = {
    title: 'New York Rangers',
    team: 'Rangers',
    city: 'NYC',
    cssClass: 'rangers',
    primaryColor: '#0161AB',
    secondaryColor: '#E6393F',
    tertiaryColor: '#FFF'
  };
  res.render('og_six_team', data);
});

router.get('/redwings', function(req, res, next) {
  var data = {
    title: 'Detroit Red Wings',
    team: 'Red Wings',
    city: 'DET',
    cssClass: 'red-wings',
    primaryColor: '#EC1F26',
    secondaryColor: '#FFF',
    tertiaryColor: '#B11200'
  };
  res.render('og_six_team', data);
});

module.exports = router;
