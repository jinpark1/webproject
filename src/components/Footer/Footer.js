import React, { Component } from 'react';
import './Footer.css';
import starImg from '../../images/star.png';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
               <div className="footer-content">
                    <div><img src={starImg} /></div>
                    <div><img src={starImg} /></div>
                    <div><img src={starImg} /></div>
               </div>
            </div>
        );
    }
}

export default Footer;


