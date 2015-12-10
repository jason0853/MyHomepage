var React = require('react');

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
	}

});

module.exports = CubeBox;