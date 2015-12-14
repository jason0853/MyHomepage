var React = require('react');
var d3 = require('d3');
var $ = require('jquery');

var Skill = React.createClass({

	render: function() {
		return (
			<div id="barChart"></div>
		);
	},

	componentDidMount: function() {
		
		// See D3 margin convention
		var margin = { top: 20, right: 10, bottom: 100, left: 40}
		      width = $('#barChart').width() - margin.right - margin.left;
		      height = 500 - margin.top - margin.bottom;

		// Define SVG
		var svg = d3.select('#barChart')
				.append('svg')
				.attr({
					'width' : width + margin.right + margin.left,
					'height' : height + margin.top + margin.bottom
				})
				.append('g')
					.attr('transform', 'translate(' + margin.left + ', ' + margin.right + ')');

		
	},

});

module.exports = Skill;