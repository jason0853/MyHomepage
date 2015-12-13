var React = require('react');
var $ = require('jquery');

var ResizeScreen = React.createClass({

	getInitialState: function() {
		return {
			resizeState: false
		};
	},

	updateScreenDimension: function() {
		
		if (!document.fullscreenElement &&
		      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { 
			this.setState({
				resizeState: false 
			});
		} else {
			this.setState({
				resizeState: true 
			});
		}
	},

	handleScreen: function() {

		// Check if it is currently being displayed fullscreen
		if (!document.fullscreenElement &&
		      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { 

			// Implement fullscreen mode
			if (document.documentElement.requestFullscreen) {
			      document.documentElement.requestFullscreen();
			} else if (document.documentElement.msRequestFullscreen) {
			      document.documentElement.msRequestFullscreen();
			} else if (document.documentElement.mozRequestFullScreen) {
			      document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullscreen) {
			      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			this.setState({ resizeState: true });
		} else {		// Getting out of full screen mode
		    	if (document.exitFullscreen) {
		      	document.exitFullscreen();
		    	} else if (document.msExitFullscreen) {
		      	document.msExitFullscreen();
		    	} else if (document.mozCancelFullScreen) {
		      	document.mozCancelFullScreen();
		    	} else if (document.webkitExitFullscreen) {
		      	document.webkitExitFullscreen();
		    	}
		    	this.setState({ resizeState: false });
		}
	},

	render: function() {
		var text = this.state.resizeState ? 'small' : 'full';
		return (
			<div id="resizeScreen" onClick={this.handleScreen}>
				<span className={"glyphicon glyphicon-resize-" + text}></span>
			</div>
		);
	},

	componentDidMount: function() {
		window.addEventListener('resize', this.updateScreenDimension);
	}

});

module.exports = ResizeScreen;