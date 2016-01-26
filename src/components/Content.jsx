var React = require('react');
var CubeBox = require('./main/CubeBox.jsx');
var Video = require('./main/Video.jsx');
var CV = require('./main/CV.jsx');
var $ = require('jquery');

var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;


var Content = React.createClass({
	getInitialState: function() {
		return {
			index: 0
		};
	},

	render: function() {
		return (
			<div className="content">
				<Carousel
					ref="carousel"
					controls={false} 
					indicators={false}
					activeIndex={this.state.index}
				>
				    	<CarouselItem>
				      	<Video />
				    	</CarouselItem>
				    	<CarouselItem>
				      	<CV />
				    	</CarouselItem>
				    	<CarouselItem>
				      	<CubeBox />
				    	</CarouselItem>
				    	<CarouselItem>
				      	<Video />
				    	</CarouselItem>
				    	<CarouselItem>
				      	<CV />
				    	</CarouselItem>
				    	<CarouselItem>
				      	<CubeBox />
				    	</CarouselItem>
				</Carousel>
			</div>
		);
	},

});

module.exports = Content;