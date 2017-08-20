function plotGoals(data) {
  console.log('plot goals javascripts loaded');
  console.log(data);

  var years = [];
  var regularGoalsFor = [];
  var regularGoalsAgainst = [];
  var playoffGoalsFor = [];
  var playoffGoalsAgainst = [];

  var goalsCanvas = $('#goals-chart');

  for (var i = 0; i < length; i++) {
    if (data[i].goals_for) {}
    if (data[i].goals_against) {}
  }

  var goalsChart = new Chart(goalsCanvas, {
    type: '',
  })
};
