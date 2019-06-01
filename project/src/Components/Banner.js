import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import banner_1 from '../images/banner1.png';
import banner_2 from '../images/banner2.png';
import banner_3 from '../images/banner3.png';

class Banner extends Component {
	render () {
		return (
			<div>
				<div className="container-fluid">
					<div className="container">
						<div className="row">
							<img src={banner_1} className="col-xs-12 col-md-6 col-lg-6 padding" />
							<img src={banner_2} className="col-xs-12 col-md-6 col-lg-6 padding" />						
						</div>
						<div className="row">						
							<img src={banner_3} className="col-12 padding" />
						</div>
					</div>
				</div>				
			</div>
		);
	}
}

export default Banner;