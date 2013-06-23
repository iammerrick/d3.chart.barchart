(function() {
  var chart = d3.select('#vis')
    .append('svg')
    .chart('BarChart')
    .width(350)
    .height(200)
    .padding(20);
  
  chart.draw([10, 5, 8, 12, 4, 6, 4]);
}());
