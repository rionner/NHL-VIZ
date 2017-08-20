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
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(' + primaryColor + ',1)',
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'rect'
    },
    {
      label: 'Regular Season Losses',
      data: regularSeasonLosses,
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(' + secondaryColor + ',1)',
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'crossRot'
    }
  ];
  var playoffDataset = [
    {
      label: 'Playoff Season Wins',
      data: playoffWins,
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(' + primaryColor + ',1)',
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'rect'
    },
    {
      label: 'Playoff Season Losses',
      data: playoffLosses,
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(' + secondaryColor + ',1)',
      borderWidth: 2,
      steppedLine: true,
      pointRadius: 5,
      pointStyle: 'crossRot'
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
      tooltips: {
        enabled: true,
        backgroundColor: ['rgba(0,0,0,1)']
      }
    }
  });

  // function toggleSeasonType() {
  //   var toggle = true;
  //   winLossChart.data.datasets.forEach(function(dataset) {
  //       dataset.data.pop();
  //       toggle = !toggle;
  //   });

  //   winLossChart.data.datasets.forEach(function(dataset) {
  //       if (toggle) {
  //         dataset.push(playoffDataset);
  //       } else {
  //         dataset.push(regularDataset);
  //       }
  //       toggle = !toggle;
  //   });

  //   chart.update();
  // }

};

