var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Logo = require('./Logo.jsx');
var $ = require('jquery');

var Header = React.createClass({

	render: function() {
		return (
			<div id="header">
				<Navbar inverse fixedTop>
				    	<Navbar.Header>
				      	<Navbar.Brand>
				        		<a href="#">
				        			<Logo />
				        		</a>
				      	</Navbar.Brand>
				      	<Navbar.Toggle />
				    	</Navbar.Header>
				    	<Navbar.Collapse>
					      <Nav pullRight>
					        	<NavItem className="gnb" eventKey={1} href="#">Skill</NavItem>
					        	<NavItem className="gnb" eventKey={2} href="#">Work</NavItem>
					        	<NavItem className="gnb" eventKey={2} href="#">SNS</NavItem>
					        	<NavItem className="gnb" eventKey={2} href="#">Contact</NavItem>
					      </Nav>
				    	</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
});

module.exports = Header;