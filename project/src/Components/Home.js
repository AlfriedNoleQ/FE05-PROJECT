import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Navigation from './Navigation';
import Slide from './Slide';
import TextBlog from './TextBlog';
import HomeProducts from './HomeProducts';
import Social from './Social';

class Home extends Component {
	render() {
		return(
			<div>
				<React.Fragment>
					<Navigation/>
					<Slide/>
					<TextBlog/>
					<HomeProducts/>
					<Social/>
					<switch>
							
					</switch>
					
				</React.Fragment>
			</div>
		);
	}
}

export default Home;