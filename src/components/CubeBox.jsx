var React = require('react');
var $ = require('jquery');

var CubeBox = React.createClass({
	
	render: function() {
		return (
			<div id="cubebox">
				<div id="cube" className="animate">
					<div>FRONT-END</div>
					<div>FULLSTACK</div>
					<div>UI / UX</div>
					<div>WEB</div>
					<div>APP</div>
					<div>CREATOR</div>
				</div>
			</div>
		);
	},

	componentDidMount: function() {

		// Define global variable
		var videoHeight = $('#video').height();
		var cubeboxHeight = $('#cubebox').height();

		function verticalCenter (videoHeight, cubeboxHeight) {

			// Position vertical center
			$('#cubebox').css({ 'top': (videoHeight - cubeboxHeight) / 2 });	
		}
		
		// Execute verticalCenter function
		verticalCenter(videoHeight, cubeboxHeight);

		// Trigger resize event
		$(window).resize(function() {
		
			// Define local variable 
			var videoHeight = $('#video').height();
			var cubeboxHeight = $('#cubebox').height();

			// Execute verticalCenter function		
			verticalCenter(videoHeight, cubeboxHeight);
		});
	},

});

module.exports = CubeBox;