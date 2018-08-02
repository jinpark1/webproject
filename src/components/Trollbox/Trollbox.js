import React, { Component } from 'react';
import './Trollbox.css';
import TrollboxChat from './TrollboxChat';

class Trollbox extends Component {
    constructor(){
        super();

        this.state = {
            humidity: '',
        }
    }

    render() {
        return (
            <div className="trollbox">
                <div className="trollbox-container-flex">
                    <div className="trollbox-top-container"></div>
                        <div className="trollbox-chat-container">
                            <TrollboxChat />
                        </div>
                    <div className="trollbox-top-container"></div>
                </div>
            </div>
        );
    }
}

export default Trollbox;


