import React, { Component } from 'react';
import './Trollbox.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';

class Trollbox extends Component {
    render() {
        return (
            <div className="trollbox-container">
                <div className="trollbox-top">
                    <div>TROLLBOX</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
               <div className="trollbox-main"> 
                    <div className="trollbox-box"> Coming soon</div>
               </div> 
               <div className="trollbox-main2"> 
                    <div className="trollbox-box2"> Coming soon</div>
               </div> 
            </div>
        );
    }
}

export default Trollbox;


