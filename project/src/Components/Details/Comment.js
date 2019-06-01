import React, { Component } from 'react';
import CommentFrom from './CommentFrom';
import CommentList from './CommentList';

class Comment extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			comments: [],
			loading: false
		};
	
		this.addComment = this.addComment.bind(this);
	}

	componentDidMount() {
		this.setState({ loading: true });
	
		fetch("http://localhost:7777")
			.then(res => res.json())
			.then(res => {
				this.setState({
				comments: res,
				loading: false
				});
			})
			.catch(err => {
				this.setState({ loading: false });
			});
	}
	
	addComment(comment) {
		this.setState({
		  loading: false,
		  comments: [comment, ...this.state.comments]
		});
	}

	render() {

		return(
			<div className="row border mx-auto text-slanted my-5 bg-light shadow">
				<div className="col-4 pt-3 border-right">
					<h6>Say something about the product: </h6>
					<CommentFrom addComment={this.addComment} />
				</div>
				<div className="col-8 pt-3">
					<CommentList 
					loading={this.state.loading}
					comments={this.state.comments}	  
					/>
				</div>
			</div>
		);
	}
}

export default Comment;