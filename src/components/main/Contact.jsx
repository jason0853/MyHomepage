var React = require('react');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;

var Contact = React.createClass({

	render: function() {
		return (
			<div id="contact">
				<form>
					<Input type="email" label="* Email Address" placeholder="Enter email" />
					<Input type="text" label="* Subject" placeholder="Enter subject" />
					<Input type="textarea" label="* Message" placeholder="Enter content" />
					<div className="text-right">
						<ButtonInput type="submit" bsStyle="primary" value="Submit" />
					</div>
				</form>
			</div>
		);
	}

});

module.exports = Contact;