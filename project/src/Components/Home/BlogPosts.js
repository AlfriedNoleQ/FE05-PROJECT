import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import Axios from 'axios';

class BlogPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		Axios({
			method: 'get',
			url: 'http://localhost:3000/blogPosts',
			data: null
		}).then(response => {
			console.log(response);
			this.setState ({
				posts: response.data.slice(0,4)
			});
		}).catch (err => {
			console.log(err);
		});
	}

	render() {
		let listBlogs = this.state.posts.map((item) =>{
			return(
				<div className="col-12 mx-auto col-md-6 col-lg-3 my-3">
					<div class="card">
					  <img src={require(`../../${item.img}`)} class="card-img-top" alt="..."/>
					  <div class="card-body">
					    <h5 class="card-title text-uppercase font-weight-bold">{item.blogTitle}</h5>
					    <p class="card-text">{item.content}</p>
					    <a href="#" class="btn btn-outline-primary">Read my blog</a>
					  </div>
					</div>
				</div>
			)
		});

		return(
			<div>
				<div className="container-fluid">
					<hr/>
					<div className="row text-center">
						<div className="col-12">
							<span className="social-title">BLOG POSTS</span>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="container">
						<div className="row">
							{listBlogs}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogPosts;