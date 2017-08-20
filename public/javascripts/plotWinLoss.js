function plotWinLoss(data) {
  console.log('plot win & loss javascripts');
  console.log(data);

  var ctx = $("#win-loss-chart");
  ctx.width('90%');
  ctx.height('600px');

  var years = [];
  var regularSeasonWins = [];
  var regularSeasonLosses = [];
  var playoffWins = [];
  var playoffLosses = [];

  for (var i = 0, length = data.length; i < length; i++) {
    if (data[i].regular_season) {
      years.push(data[i].years);
      regularSeasonWins.push(data[i].wins);
      regularSeasonLosses.push(data[i].losses);
    } else {
      playoffWins.push(data[i].wins);
      playoffLosses.push(data[i].losses);
    }
  }

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        label: 'Regular Season Wins',
        data: regularSeasonWins,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 2
      },
      {
        label: 'Regular Season Losses',
        data: regularSeasonLosses,
        backgroundColor: ['#666'],
        borderColor: ['#000'],
        borderWidth: 2
      },
      {
        label: 'Playoff Season Wins',
        data: playoffWins,
        backgroundColor: ['#666'],
        borderColor: ['#000'],
        borderWidth: 2
      },
      {
        label: 'Playoff Season Losses',
        data: playoffLosses,
        backgroundColor: ['#666'],
        borderColor: ['#000'],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero:true
          }
        }]
      },
      options: {}
    }
  });

};

