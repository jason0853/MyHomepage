var React = require('react');
var $ = require('jquery');

var Video = React.createClass({

	getDefaultProps: function() {
		return {
			title: 'Front-end & Full-stack Developer'
		};
	},

	render: function() {
		return (
			<div id="video">
				<h2 className="title">{this.props.title}</h2>
				<video autoPlay loop muted width="100%">
			   		<source src="video/main_video.mp4" type="video/mp4" />
			 	</video>
			</div>
		);
	},

	componentDidMount: function() {
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			$('#video').find('video').remove();
			$('#video').append('<img src="img/main_video.png" alt="Main Photo" width="100%" />');
		}
	},

});

module.exports = Video;