import React, { Component } from 'react';
import './Footer.css';
import starImg from '../../images/star.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <div className="footer-content">
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
                    <div>
                        <img src={starImg} alt="star" />
                    </div>
               </div>
            </div>
        );
    }
}

export default Footer;


