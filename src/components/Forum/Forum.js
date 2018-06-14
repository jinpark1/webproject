import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';

class Forum extends Component {
    render() {
        return (
            <div className="forum-container">
                <div className="forum-top">
                    <div>FORUMS</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
                <div className="forum-main">
                    <div className="forum-category">
                        <div>All Topics</div>
                        <div>General</div>
                        <div>Games</div>
                        <div>Sports</div>
                        <div></div>
                        <div>Food</div>
                        <div>Music</div>
                        <div>Sports</div>
                        <div></div>
                        <div>Feedback</div>
                        <div>Help</div>
                        <div>Random</div>
                        <div>OffTopic</div>
                        <div>OffTopic</div>
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


