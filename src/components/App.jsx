var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header/Header.jsx');
var SNS = require('./sns/SNS.jsx');
var Content = require('./Content.jsx');

ReactDOM.render(
	<div className="app">
		<Header />
		<Content />
		<SNS />
	</div>,
	document.getElementById('container')
);