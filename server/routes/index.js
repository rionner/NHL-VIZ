var express = require('express');
var router = express.Router();

router.use('/api', require('./api.js'))
router.use('/original-six', require('./original-six.js'))

// Render home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'NHL Visualizations'
  });
});

router.get('/:team', function(req, res, next) {
  var team = req.params.team.replace(/-/g, ' ');
  var data = {
    title: team.toUpperCase(),
    team: team
  };
  res.render('team', data);
});

module.exports = router;

