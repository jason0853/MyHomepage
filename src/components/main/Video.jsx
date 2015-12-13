var React = require('react');
var $ = require('jquery');

var Video = React.createClass({

	render: function() {
		return (
			<div id="video">
				<video id="vid" autoPlay loop muted width="100%" height="100%">
			   		<source src="video/main_video.ogv" type="video/ogg" />
			   		<source src="video/main_video.mp4" type="video/mp4" />
			 	</video>
			</div>
		);
	},
	
	componentDidMount: function() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("safari/") !== -1 &&  		// It says it's Safari
		    ua.indexOf("windows") !== -1 &&  	// It says it's on Windows
		    ua.indexOf("chrom")   === -1     	 // It DOESN'T say it's Chrome/Chromium		  
		    ) {
				$('#video').find('video').remove();
				$('#video').append('<img src="img/main_video.png" alt="Main Photo" width="100%" />');		    
		}
	},

});

module.exports = Video;