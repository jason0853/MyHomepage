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
					        	<NavItem className="gnb" eventKey={1} href="#"><span data-hover="Skill">Skill</span></NavItem>
					        	<NavItem className="gnb" eventKey={2} href="#"><span data-hover="Work">Work</span></NavItem>
					        	<NavItem className="gnb" eventKey={3} href="#"><span data-hover="SNS">SNS</span></NavItem>
					        	<NavItem className="gnb" eventKey={4} href="#"><span data-hover="Contact">Contact</span></NavItem>
					      </Nav>
				    	</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
});

module.exports = Header;