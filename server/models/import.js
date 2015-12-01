var express = require('express');
var mongoose = require('mongoose');
var Team = require('../models/Team');

// declare json data
// var data = [];

// count seasons for validation
if (data.length > 0) {
  var i = 0;
  // console.log(data)
  for (var season in data) {
    i++;
    console.log(data[season]);
    console.log(i);
    Team.create(data[season], function(err, season) {
      console.log(season);
      console.log('Season Added');
    });
  }
}
