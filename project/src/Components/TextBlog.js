import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";

class TextBlog extends Component {
	render() {
		return(
			<div>
				<div className="container-fluid">
					<div className="row jumbotron">
						<div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
							<p className="lead">Chào mừng bạn tới trang web bán máy ảnh của tôi, nơi đây không chỉ là 
							trang mà tôi bán những sản phẩm máy ảnh dslr chất lượng mà còn là trang tôi viết blog,
							là nơi dành cho những người có niềm đam mê bất tận với máy ảnh, gặp gỡ và 
							chia sẻ kinh nghiệm cùng với những bức ảnh đẹp...
							</p>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
							<a href="#"><button type="button" className="btn btn-outline-secondary btn-lg">VISIT BLOG</button></a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TextBlog;