import React, { Component } from 'react';
import CommentItem from './CommentItem';

function CommentList(props) {
	return(
		<div className="commnetList">
			<h5 className="text-muted mb-4">
				<span className="badge badge-success">{props.comments.length}</span>{" "}
				Comment{props.comments.length > 0 ? "s" : ""}
			</h5>

			{props.comments.length === 0 && !props.loading ? (
			<div className="alert text-center alert-info">
			Be the first to comment
			</div>
			) : null}

			{props.comments.map((comment, index) => (
			<CommentItem key={index} comment={comment} />
			))}
		</div>
	);
}

export default CommentList;