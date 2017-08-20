function plotWinLoss(data, colors, years) {
  var teamData = data;
  var primaryColor = colors['primary-rgb'];
  var secondaryColor = colors['secondary-rgb'];
  // var tertiaryColor = colors['tertiary-rgb'];
  // var quarternaryColor = colors['quarternary-rgb'];
  var years = years;

  var regularSeasonWins = [];
  var regularSeasonLosses = [];
  var playoffWins = [];
  var playoffLosses = [];

  var winLossCanvas = $('#win-loss-chart');

  for (var i = 0; i < teamData.length; i++) {
    if (teamData[i].regular_season) {
      regularSeasonWins.push(teamData[i].wins);
      regularSeasonLosses.push(teamData[i].losses);
    } else {
      playoffWins.push(teamData[i].wins);
      playoffLosses.push(teamData[i].losses);
    }
  }

  var regularDataset = [
    {
      label: 'Regular Season Wins',
      data: regularSeasonWins,
      backgroundColor: ['rgba(' + primaryColor + ',0.1)'],
      borderColor: ['rgba(' + primaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointStyle: 'rect'
    },
    {
      label: 'Regular Season Losses',
      data: regularSeasonLosses,
      backgroundColor: ['rgba(' + secondaryColor + ',0.1)'],
      borderColor: ['rgba(' + secondaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointStyle: 'rect'
    }
  ];
  var playoffDataset = [
    {
      label: 'Playoff Season Wins',
      data: playoffWins,
      backgroundColor: ['rgba(' + primaryColor + ',0.1)'],
      borderColor: ['rgba(' + primaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointStyle: 'rect'
    },
    {
      label: 'Playoff Season Losses',
      data: playoffLosses,
      backgroundColor: ['rgba(' + secondaryColor + ',0.1)'],
      borderColor: ['rgba(' + secondaryColor + ',1)'],
      borderWidth: 2,
      steppedLine: true,
      pointStyle: 'rect'
    }
  ];

  var winLossChart = new Chart(winLossCanvas, {
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
    }
  });


};

