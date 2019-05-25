import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import './Slide.css';
import main from './images/main.jpg';
import nikon from './images/nikon.png';
import canon from './images/canon.png';

class Slide extends Component {
	render() {
		return(
			<div id="slideShow">
				<div className="container">
					<div id="slides" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#slides" data-slide-to="0" className="active"></li>
						<li data-target="#slides" data-slide-to="1"></li>
						<li data-target="#slides" data-slide-to="2"></li>
					</ul>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={main}/>
							<div className="carousel-caption">
								<h1>Main</h1>
							</div>
						</div>
						<div className="carousel-item">
							<img src={nikon}/>
							<div className="carousel-caption">
								<h1>Nikon</h1>
							</div>
						</div>
						<div className="carousel-item">
							<img src={canon}/>
							<div className="carousel-caption">
								<h1>Canon</h1>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
		);
	}
}

export default Slide;