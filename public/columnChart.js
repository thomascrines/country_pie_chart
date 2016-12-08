var ColumnChart = function(type, title, seriesName, data, categories) {

  var container = document.getElementById('column-chart');
  var chart = new Highcharts.Chart( {

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
    }],

    xAxis: {
      categories: categories
    }

  });
  
}