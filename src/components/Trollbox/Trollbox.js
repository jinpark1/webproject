import React, { Component } from 'react';
import './Trollbox.css';
import backGroundGrey from '../../images/4kwall.jpg';
import TrollboxChat from './TrollboxChat';


class Trollbox extends Component {

    render() {
        return (
            <div className="trollbox">
                <div className="trollbox-container-flex">
                    <div className="trollbox-top-container">top
                        <div className="trollbox-top-child">top-child</div>
                    </div>
                    <div className="trollbox-one-container">one
                        <div className="trollbox-one-child">one-child</div>
                    </div>
                    <div className="trollbox-two-container">two
                        <div className="trollbox-two-child">two-child</div>
                    </div>
                    <div className="trollbox-three-container">three
                        <div className="trollbox-three-child">three-child</div>
                    </div>
                    <div className="trollbox-four-container">four
                        <div className="trollbox-four-child">four-child</div>
                    </div>
                    <div className="trollbox-five-container">five
                        <div className="trollbox-five-child">five-child</div>
                    </div>
                    <div className="trollbox-six-container">six
                        <div className="trollbox-six-child">six-child</div>
                    </div>
                    <div className="trollbox-bottom-container">
                        <div className="trollbox-bottom-child"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trollbox;


