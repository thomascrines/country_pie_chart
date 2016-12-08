var PieChart = function(type, title, seriesName, data) {

  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({

    chart: {
      type: type,
      renderTo: container
    },

    title: {
      text: title
    },

    series: [{
      name: seriesName,
      data: data
    }]

  });
  
}