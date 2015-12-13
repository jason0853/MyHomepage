var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header/Header.jsx');
var CubeBox = require('./main/CubeBox.jsx');
var Video = require('./main/Video.jsx');
var CV = require('./CV.jsx');

ReactDOM.render(
	<div className="content">
		<Header />
		<CubeBox />
		<Video />
		<CV />
	</div>, 
	document.getElementById('container')
);