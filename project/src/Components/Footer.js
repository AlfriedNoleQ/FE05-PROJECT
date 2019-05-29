import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../styles/Footer.css';

class Footer extends Component {
	render() {
		return(
			<div>
				<footer>
					<div className="container-fluid padding">
						<div className="row text-center">
							<div className="col-md-3">
								<p>OUR INFORMATION</p>
								<hr/>
								<p>Phone: 0905-000-888</p>
								<p>Email: dslr@gmail.com</p>
								<p>Address: Danang, Vietnam</p>
							</div>
							<div className="col-md-3">
								<p>OPEN HOURS</p>
								<hr/>
								<p>9:00 am to 18:00 pm</p>
								<p>Sunday: Close</p>
							</div>
							<div className="col-md-3">
								<p>SERVICE</p>
								<hr/>
							</div>
							<div className="col-md-3">
								<p>NEWS SELTER</p>
								<hr/>
							</div>
							<div className="col-12">
								<hr/>
								<p><a href="#">DSLR Camera</a> Template <span>|</span> copyright &copy; 2019</p>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;