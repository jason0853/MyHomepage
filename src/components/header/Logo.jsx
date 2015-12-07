var React = require('react');
var d3 = require('d3');

var Logo = React.createClass({

	render: function() {
		return (
			<div id="logo"></div>
		);
	},

	componentDidMount: function() {
		
		// Define canvas
		var canvas = d3.select('#logo')
					.append('svg')
						.attr('width', 70)
						.attr('height', 50)
						.on('mouseover', function(d, i) {						// mouseover event
							d3.select(this).selectAll('circle').transition()
								.ease('elastic')
	  								.duration('1000')
	  								.attr("r", 23);
	  							d3.select(this).selectAll('text').transition()
	  								.ease('cubic-out')
						            .duration('500')
						            .attr('x', 24)
						            .attr('y', 31)
						            .attr("font-size", 18);
						})
						.on('mouseout', function(d, i) {						// mouseout event		
							d3.select(this).selectAll('circle').transition()
						            .ease('quad')
						            .delay('100')
						            .duration('200')
						            .attr('r', 20);

						      d3.select(this).selectAll('text').transition()
	  								.ease('cubic-out')
	  								.delay('100')
						            .duration('200')
						            .attr('x', 27)
						            .attr('y', 30)
						            .attr('font-size', 13);
						});

		// Define circle
		var circle = canvas.append('circle')
					.attr('cx', 35)
					.attr('cy', 25)
					.attr('r', 20)
					.style('stroke', '#0078ff')
					.style('stroke-width', '2')
					.style('fill', '#148cff'); 
		// Define text
		var text = canvas.append('text')
					.attr('x', 27)
					.attr('y', 30)
					.attr('font-size', 13)
					.style('fill', '#fff')
					.text('JS');
	},

});

module.exports = Logo;