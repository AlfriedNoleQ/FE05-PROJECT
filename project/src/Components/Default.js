import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import pnf from '../images/404.gif';

class Default extends Component {
    render() {
        return(
            <div className="container mt-5">
                <div className="col-10 mx-auto text-center text-title">
                    <img src={pnf} alt="404" height="300" width="450" />
                    <h6 className="text-uppercase mt-2">Go back to <Link to="/">home</Link></h6>
                </div>
            </div>
        )
    }
}

export default Default;