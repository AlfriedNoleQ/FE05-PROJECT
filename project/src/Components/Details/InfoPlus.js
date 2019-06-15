import React, {Component} from 'react';
import '../../styles/InfoPlus.css';

class InfoPlus extends Component {
    render() {
        return(
            <div className="container mt-5">
                <div className="col">
                    <div className="card-gift mb-2">
                        <div className="card-header text-center border">
                            <i class="fas fa-gift mr-2"></i>
                            Bonus
                        </div>
                        <div className="card-body border">
                            <p className="gift-list">
                                <i class="fas fa-shipping-fast"></i> Free shipping <br/>
                                <i class="fas fa-sd-card mr-2"></i> SD SanDisk 32GB <br/>
                                <i class="fas fa-briefcase mr-2"></i> BBK Bag
                            </p>
                        </div>
                    </div>
                    <div className="card-warranty mb-2">
                        <div className="card-header text-center border">
                            <i class="fas fa-award mr-2"></i>
                            Warranty
                        </div>
                        <div className="card-body border">
                            <p className="warranty-list">
                                <i class="fas fa-check"></i> Genuine 100% <br/>
                                <i class="fas fa-check"></i> 6 months warranty <br/>
                                <i class="fas fa-check"></i> 15 days change
                            </p>
                        </div>
                    </div>
                    <div className="card-contact">
                        <div className="card-header text-center border">
                            <i class="fas fa-address-book mr-2"></i>
                            Contact
                        </div>
                        <div className="card-body border">
                            <p className="contact-list">
                                <i class="fas fa-map-marker-alt"></i> 123 Le Duan. Danang <br/>
                                <i class="fas fa-phone"></i> 1900 1234 <br/>
                                <i class="fas fa-envelope"></i> htqdslr@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoPlus;