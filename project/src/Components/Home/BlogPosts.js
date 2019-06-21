import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../../styles/BlogPosts.css';
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
					<div className="card">
					  <img src={require(`../../${item.img}`)} className="card-img-top" alt="..."/>
					  <div className="card-body">
					    <h5 className="card-title text-uppercase font-weight-bold">{item.blogTitle}</h5>
					    <p className="card-text">{item.content}</p>
					    <a href="#" className="btn btn-outline-success">Xem thêm...</a>
					  </div>
					</div>
				</div>
			)
		});

		return(
			<div className="padding">
				<div className="container-fluid">
					<div className="container">
						<hr/>
						<div className="row text-center">
							<div className="col-12">
								<span className="blog-title font-weight-bold">BLOG</span>
							</div>
						</div>
						<hr/>
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



