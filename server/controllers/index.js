var express = require('express');
var router = express.Router();

router.use('/api', require('./api.js'))
router.use('/original-six', require('./original-six.js'))
// router.use('/team', require('./team.js'))

// Render home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'NHL Visualizations',
    layout: 'layout'
  });
});

module.exports = router;

