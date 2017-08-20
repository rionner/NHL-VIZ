function plotGoals(data, colors, years) {
  var teamData = data;
  var primaryColor = colors['primary-rgb'];
  var secondaryColor = colors['secondary-rgb'];

  var regularGoalsFor = [];
  var regularGoalsAgainst = [];
  var playoffGoalsFor = [];
  var playoffGoalsAgainst = [];

  var goalsCanvas = $('#goals-chart');

  for (var i = 0; i < teamData.length; i++) {
    if (teamData[i].regular_season) {
      regularGoalsFor.push(teamData[i].goals_for);
      regularGoalsAgainst.push(teamData[i].goals_against);
    } else {
      playoffGoalsFor.push(teamData[i].goals_for);
      playoffGoalsAgainst.push(teamData[i].goals_against);
    }
  }

  var regularDataset = [
    {
      label: 'Regular Season Goals Scored',
      data: regularGoalsFor,
      backgroundColor: ['rgba(255,255,255,0)'],
      borderColor: ['rgba(' + primaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'rect'
    },
    {
      label: 'Regular Season Goals Allowed',
      data: regularGoalsAgainst,
      backgroundColor: ['rgba(255,255,255,0)'],
      borderColor: ['rgba(' + secondaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'crossRot'
    }
  ];
  var playoffDataset = [
    {
      label: 'Playoff Season Goals Scored',
      data: playoffGoalsFor,
      backgroundColor: ['rgba(255,255,255,0)'],
      borderColor: ['rgba(' + primaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'rect'
    },
    {
      label: 'Playoff Season Goals Allowed',
      data: playoffGoalsAgainst,
      backgroundColor: ['rgba(255,255,255,0)'],
      borderColor: ['rgba(' + secondaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'crossRot'
    }
  ];

  var goalsChart = new Chart(goalsCanvas, {
    type: 'line',
    data: {
      labels: years,
      datasets: regularDataset
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero:true
          }
        }]
      },
      tooltips: {
        enabled: true,
        backgroundColor: ['rgba(0,0,0,1)']
      }
    }
  })
};
