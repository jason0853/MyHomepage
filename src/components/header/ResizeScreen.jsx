var React = require('react');

var ResizeScreen = React.createClass({

	render: function() {
		return (
			<div id="resizeScreen">
				<span className="glyphicon glyphicon-resize-full"></span>
			</div>
		);
	}

});

module.exports = ResizeScreen;