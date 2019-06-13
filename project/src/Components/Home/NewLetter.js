import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import '../../styles/NewLetter.css';

class NewLetter extends Component {
	render() {
		return(
			 <div className="newletter">
				<div className="container-fluid padding">
					<hr/>
					<div className="row text-center padding">
						<div className="col-12">
							<span className="letter-title font-weight-bold">NEWS LETTER</span>
						</div>
					</div>
					<div className="container col-6 text-center">
						<div className="row padding">
							<input type="email" 
							className="form-control" 
							placeholder="Your Email..."/>
						</div>
						<div className="text-center">
							<button type="submit" 
							className="btn btn-success">Sign In</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewLetter;


// 			
// 			<div class="top-content">
	    //     	<div class="container text-center">
	        	
					// <div class="row">
					// 	<div class="col-sm-8 col-sm-offset-2 text">
					// 		<h1 class="">Newsletter</h1>
					// 		<div class="description wow fadeInLeftBig">
					// 			<p>
					// 				This is a free responsive newsletter sign-up landing page made with Bootstrap. 
					// 				Download it on <a href="http://azmind.com/free-bootstrap-themes-templates/">AZMIND</a> and customize it as you like!
					// 			</p>
					// 		</div>
					// 	</div>
					// </div>

					// <div class="row">
					// 	<div class="col-sm-12 subscribe wow fadeInUp">
	    //            			<form class="form-inline" role="form" action="assets/subscribe.php" method="post">
		   //                  	<div class="form-group">
		   //                  		<label class="sr-only" for="subscribe-email">Email address</label>
		   //                      	<input type="text" name="email" placeholder="Enter Your Email..." class="subscribe-email form-control" id="subscribe-email"/>
		   //                      </div>
		   //                      <button type="submit" class="btn">Subscribe Now <i class="fa fa-angle-right"></i></button>
		   //                  </form>
		   //                  <div class="success-message"></div>
		   //                  <div class="error-message"></div>
					// 	</div>
					// </div>
	                
	    //         </div>
	    //     </div>