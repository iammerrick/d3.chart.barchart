/*! d3.chart.barchart - v0.0.1
 *  License: MIT
 *  Date: 2013-06-22
 */
d3.chart('BarChart', {
  initialize: function() {
    /**
     * Fetch from attributes as a fallback.
     */
    
    this.width(this.base.attr('width'));
    this.height(this.base.attr('height'));
    this.padding(10);
    this.scale = d3.scale.linear();
    
    var container = this.base.append('g')
      .attr('height', this.height())
      .attr('width', this.width());

    this.layer('bars', container, {

      dataBind: function(data) {
        var chart = this.chart();

        chart.base.select('g')
          .attr('transform', 'translate(0, '+chart.height()+') scale(1, -1)');

        chart.scale
          .domain([0, d3.max(data)])
          .range([0, chart.height()]);


        chart.numberOfBars = data.length;

        return this.selectAll('rect')
          .data(data);
      },

      insert: function() {
        var chart = this.chart();
        
        return this.append('rect')
          .style('fill', '#48c863')
          .attr('width', (chart.width() / chart.numberOfBars) - chart.padding());
      },

      events: {
        enter: function() {

          var chart = this.chart();

          return this
            .attr('x', function(d, i) {
              return (i * (chart.width() / chart.numberOfBars));
            });
        },
        'enter:transition': function() {
          var chart = this.chart();
          return this
            .attr('height', function(d){
              return chart.scale(d);
            });
        }
      }

    });
  },

  width: function(width) {
    if ( ! width) {
      return this.w;
    }

    this.w = width;
    
    return this;
  },

  height: function(height) {
    if ( ! height) {
      return this.h;
    }

    this.h = height;

    return this;
  },

  padding: function(padding) {
    if (! padding) {
      return this.p;
    }

    this.p = padding;

    return this;
  }
});
