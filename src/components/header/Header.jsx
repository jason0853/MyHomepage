var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Logo = require('./Logo.jsx');
var ResizeScreen = require('./ResizeScreen.jsx');
var $ = require('jquery');

var Header = React.createClass({
	
	getInitialState: function() {
		return {
			open: false
		};
	},

	handleToggle: function() {
		this.setState({
			open: !this.state.open
		}, function() {
			if (this.state.open === true) {
				$('#header').find('.icon-bar:eq(0)').removeClass('glyphicon glyphicon-menu-down');
				$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-up');
				// $('#header').find('.navbar-toggle').css('background-color', '#222');
			} else {
				$('#header').find('.icon-bar:eq(0)').removeClass('glyphicon glyphicon-menu-up');
				$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-down');
				// $('#header').find('.navbar-toggle').css('background-color', 'initial');
			}
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
					        	<NavItem className="gnb" eventKey={5} href="#"><span data-hover="PHOTO">PHOTO</span></NavItem>
					        	<NavItem className="gnb" eventKey={6} href="#"><span data-hover="BOARD">BOARD</span></NavItem>
					      </Nav>
				    	</Navbar.Collapse>
				   	<ResizeScreen />
				</Navbar>
			</div>
		);
	},

	componentDidMount: function() {
		// Added classname to toggle button
		$('#header').find('.icon-bar:eq(0)').addClass('glyphicon glyphicon-menu-down');


	},
});

module.exports = Header;