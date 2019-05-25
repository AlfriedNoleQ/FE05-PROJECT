import React, { Component } from 'react';
import home_banner from './images/home_banner_camera.jpg';

class Banner extends Component {
	render () {
		return (
			<div className="header-banner">
				<img src={ home_banner } className="d-block w-100"/>
			</div>
		);
	}
}

export default Banner;