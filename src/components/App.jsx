var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header/Header.jsx');
var Video = require('./video/Video.jsx');

ReactDOM.render(
	<div className="content">
		<Header />
		<Video />
	</div>, 
	document.getElementById('container')
);