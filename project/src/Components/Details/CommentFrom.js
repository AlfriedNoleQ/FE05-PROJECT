import React, { Component } from 'react';
import'../../styles/CommentForm.css';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
        
            comment: {
                name: "",
                message: ""
            }
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    handleFieldChange = event => {
        const { value, name } = event.target;

        this.setState({
            ...this.state,
            comment: {
            ...this.state.comment,
            [name]: value
            }
        });
    };

    onSubmit(e) {
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
    }

    this.setState({ error: "", loading: true });

    let { comment } = this.state;
    fetch("http://localhost:3000/comments", {
        method: "post",
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
        .then(res => {
        if (res.error) {
            this.setState({ loading: false, error: res.error });
        } else {
            comment.time = res.time;
            this.props.addComment(comment);

            this.setState({
            loading: false,
            comment: { ...comment, message: "" }
            });
        }
        })
        .catch(err => {
        this.setState({
            error: "Something went wrong while submitting form.",
            loading: false
        });
        });
    }

    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

	render() {
		return(
            <React.Fragment>
                <form method="post" onSubmit={this.onSubmit}>
                    <div>
                        <div class="starrating risingstar d-flex justify-content-center flex-row-reverse">
                            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star"/>
                            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star"/>
                            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star"/>
                            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star"/>
                            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                        onChange={this.handleFieldChange}
                        value={this.state.comment.name}
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                        onChange={this.handleFieldChange}
                        value={this.state.comment.message}
                        className="form-control"
                        placeholder="💬Your Comment"
                        name="message"
                        rows="5"
                        />
                    </div>

                    {this.renderError()}

                    <div className="form-group">
                        <button disabled={this.state.loading} className="btn btn-primary">
                        Send &#10148;
                        </button>
                    </div>
                </form>
            </React.Fragment>
		);
	}
}

export default CommentForm;