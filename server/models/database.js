var mongoos = require('mongoose');
var connectionString = 'mongodb://localhost/nhl_viz';

mongoose.connect(connectionString);
mongoose.connection.on('connected', function() {
  console.log(' [MongoDB] Connected ');
});

mongoose.connection.on('disconnected', function() {
  console.log(' [MongoDB] Disconnected ');
});

mongoose.connection.on('error', function() {
  console.log(' [MongoDB] Error:');
  console.log(error);
});
