import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../styles/Slide.css';
import dslr_tuto from '../images/dslr-tutorials.png';
import home_banner from '../images/home_banner_camera.jpg';
import header_banner from '../images/header-banner.jpg';

class Slide extends Component {
	render() {
		return(
			<div id="slideShow">
					<div id="slides" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#slides" data-slide-to="0" className="active"></li>
						<li data-target="#slides" data-slide-to="1"></li>
						<li data-target="#slides" data-slide-to="2"></li>
					</ul>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={home_banner}/>
							<div className="carousel-caption">
								<h1></h1>
								<button type="button" className="btn btn-success btn-lg">VISIT BLOG</button>
								<button type="button" className="btn btn-primary btn-lg">GO TO SHOP</button>
							</div>
						</div>
						<div className="carousel-item">
							<img src={dslr_tuto}/>
							<div className="carousel-caption">
								<h1></h1>
								<button type="button" className="btn btn-success btn-lg">VISIT BLOG</button>
								<button type="button" className="btn btn-primary btn-lg">GO TO SHOP</button>
							</div>
						</div>
						<div className="carousel-item">
							<img src={header_banner}/>
							<div className="carousel-caption">
								<h1></h1>
								<button type="button" className="btn btn-success btn-lg">VISIT BLOG</button>
								<button type="button" className="btn btn-primary btn-lg">GO TO SHOP</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Slide;