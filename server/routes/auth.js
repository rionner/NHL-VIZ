var express = require('express');
var router = express.Router();

app.route('/login')
  // show login form
  .get(function(req, res, next) {})
  .post(function(req, res, next) {});


app.route('/logout')
  // show login form
  .get(function(req, res, next) {})
  .post(function(req, res, next) {});

app.use('/', router);

module.exports = router;
