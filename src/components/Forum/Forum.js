import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';

class Forum extends Component {
    render() {
        return (
            <div className="forum-container">
                <div className="forum-top">
                    <div>FORUMS</div>
                    <img src={backGroundGrey} />
                </div>
                <div className="forum-main">
                    <div className="forum-category">
                      nting and typesetting industry. Lorem Ipsum has been t
                    </div>
                    <div className="forum-post">
                       nting and typesetting industry. Lorem Ipsum has been t
                    </div>
                </div>    
            </div>
        );
    }
}

export default Forum;


