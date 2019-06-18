import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './../styles/Footer.css';
import fb_brand from './../images/social/fb-brand.png';
import twt_brand from './../images/social/twt-brand.png';
import gplus_brand from './../images/social/gplus-brand.png';
import flickr_brand from './../images/social/fk-brand.png';
import rss_brand from './../images/social/rss-brand.png';
import vm_brand from './../images/social/vm-brand.png';

class Footer extends Component {
	render() {
		return(
			<div>
				<footer>
					<div className="container-fluid padding">
						<div className="row text-center">
							<div className="col-md-4">
								<p className="footer-title font-weight-bold">OUR INFORMATION</p>
								<p>Phone: 0905-000-888</p>
								<p>Email: dslr@gmail.com</p>
								<p>Address: Danang, Vietnam</p>
							</div>
							<div className="col-md-4">
								<p className="footer-title font-weight-bold">OPEN HOURS</p>
								<p>9:00 am to 18:00 pm</p>
								<p>Sunday: Close</p>
							</div>
							<div className="col-md-4">
								<p className="footer-title font-weight-bold">SERVICE</p>
							</div>
						</div>
					</div>
					<div className="navbar navbar-footer navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<p><a href="#">DSLR Camera</a> Template <span>|</span> copyright &copy; 2019</p>
							<ul className="social-links">
								<li className="fb float-left"><a href="#"></a></li>
								<li className="twt float-left"><a href="#"></a></li>
								<li className="fk float-left"><a href="#"></a></li>
								<li className="rss float-left"><a href="#"></a></li>
								<li className="vm float-left"><a href="#"></a></li>
								<li className="gplus float-right"><a href="#"></a></li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;