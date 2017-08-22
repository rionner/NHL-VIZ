var express = require('express');
var router = express.Router();

router.use('/api', require('./api.js'));

// Render Index of All Teams (Site Home)
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'NHL Visualizations'
  });
});

// Render Original Six Teams Page
router.get('/original-six', function(req, res, next) {
  res.render('original-six', {
    title: 'Original Six Visualizations'
  });
});

// Render team specific page
router.get('/:team', function(req, res, next) {
  var team = req.params.team.replace(/-/g, ' ');
  var data = {
    title: team.toUpperCase(),
    team: team
  };
  res.render('team', data);
});

module.exports = router;

