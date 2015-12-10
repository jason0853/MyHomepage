var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Logo = require('./Logo.jsx');
var ResizeScreen = require('./ResizeScreen.jsx');

var Header = React.createClass({
	
	getInitialState: function() {
		return {
			expanded: false
		};
	},

	handleToggle: function() {
		this.setState({
			expanded: true
		}, function() {
			alert('a');
		});
	},
	
	render: function() {
		return (
			<div id="header">
				<Navbar inverse fixedTop onToggle={this.handleToggle}>
				    	<Navbar.Header>
				      	<Navbar.Brand>
				        		<a href="#">
				        			<Logo />
				        		</a>
				      	</Navbar.Brand>
				      	<Navbar.Toggle />
				    	</Navbar.Header>
				    	<Navbar.Collapse>
					      <Nav>
					        	<NavItem className="gnb" eventKey={1} href="#"><span data-hover="CV">CV</span></NavItem>
					        	<NavItem className="gnb" eventKey={2} href="#"><span data-hover="WEB">WEB</span></NavItem>
					        	<NavItem className="gnb" eventKey={3} href="#"><span data-hover="APP">APP</span></NavItem>
					        	<NavItem className="gnb" eventKey={4} href="#"><span data-hover="SKILL">SKILL</span></NavItem>
					        	<NavItem className="gnb" eventKey={5} href="#"><span data-hover="FAVORITE">FAVORITE</span></NavItem>
					        	<NavItem className="gnb" eventKey={6} href="#"><span data-hover="CONTACT">CONTACT</span></NavItem>
					      </Nav>
				    	</Navbar.Collapse>
				   	<ResizeScreen />
				</Navbar>
			</div>
		);
	}
});

module.exports = Header;