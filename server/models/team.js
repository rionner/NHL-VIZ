var mongoose = require('mongoose');
var TeamSchema = new.mongoose.Schema({
  "team": String,
  "years": String,
  "year1": Number,
  "year2": Number,
  "regular_season": Boolean,
  "games_played": Number,
  "wins": Number,
  "losses": Number,
  "overtime": Number,
  "points": Number,
  "win_percentage": Number,
  "goals_for": Number,
  "goals_against": Number,
  "power_play_goals_for": Number,
  "power_play_opportunities": Number,
  "power_play_percentage": Number,
  "power_play_goals_against": Number,
  "times_shorthanded": Number,
  "penalty_kill_percentage": Number,
  "shorthanded_goals_for": Number,
  "shorthanded_goals_against":Number,
  "shut_outs": Number,
  "times_shut_out":Number
});

module.exports = mongoose.Model('TeamSchema', TeamSchema);
