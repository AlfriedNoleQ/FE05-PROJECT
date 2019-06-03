import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Slide from './Slide';
import '../../styles/Home.css';
import TextBlog from './TextBlog';
import HomeProducts from './HomeProducts';
import HotDeals from './HotDeals';
import Banner from './Banner';
import BlogPosts from './BlogPosts';
import NewLetter from './NewLetter';

class Home extends Component {
	render() {
		return(
			<div>
				<React.Fragment>
					<Slide/>
					<TextBlog/>
					<HomeProducts/>
					<Banner/>
					<HotDeals/>
					<BlogPosts/>
					<NewLetter/>
				</React.Fragment>
			</div>
		);
	}
}

export default Home;