var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header/Header.jsx');

ReactDOM.render(
	<div className="content">
		<Header />
	</div>, 
	document.getElementById('container')
);