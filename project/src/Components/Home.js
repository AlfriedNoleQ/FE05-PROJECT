import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Navigation from './Navigation';
import Banner from './Banner';
import Slide from './Slide';

class Home extends Component {
	render() {
		return(
			<div>
				<React.Fragment>
					<Navigation/>
					<Banner/>
					<Slide/>
					<switch>
						
					</switch>
					
				</React.Fragment>
			</div>
		);
	}
}

export default Home;