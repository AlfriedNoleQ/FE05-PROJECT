import React from "react";

function Comment(props) {
    const { name, message, time } = props.comment;

    return (
        <div className="media mb-3">
            <img
                className="mr-3 bg-light rounded"
                width="48"
                height="48"
                src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
                alt={name}
            />
            <div className="media-body p-2 shadow-sm rounded bg-light border">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="mt-0 mb-1 text-muted">{name}</h6>
                    </div>
                    <div className="col-md-3">
                        <small className="float-left ml-2 text-muted">{time}</small>
                    </div>
                    <div className="col-md-3">
                        <small className="float-right">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                        </small>
                    </div>
                </div>
                {message}
            </div>
        </div>
    );
}

export default Comment;