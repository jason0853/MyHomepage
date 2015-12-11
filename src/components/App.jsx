var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header/Header.jsx');
var CubeBox = require('./CubeBox.jsx');
var Video = require('./Video.jsx');


ReactDOM.render(
	<div className="content">
		<Header />
		<CubeBox />
		<Video />
	</div>, 
	document.getElementById('container')
);