var React = require('react');
var $ = require('jquery');

var ResizeScreen = React.createClass({

	handleScreen: function() {
		
	},

	render: function() {
		return (
			<div id="resizeScreen" onClick={this.handleScreen}>
				<span className="glyphicon glyphicon-resize-full"></span>
			</div>
		);
	}

});

module.exports = ResizeScreen;