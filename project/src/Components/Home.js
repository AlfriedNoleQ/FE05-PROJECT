import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Slide from './Slide';
import TextBlog from './TextBlog';
import HomeProducts from './HomeProducts';
import Social from './Social';

class Home extends Component {
	render() {
		return(
			<div>
				<React.Fragment>
					<Slide/>
					<TextBlog/>
					<HomeProducts/>
					<Social/>	
				</React.Fragment>
			</div>
		);
	}
}

export default Home;