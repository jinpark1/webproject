import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';
import Topic from './Topic/Topic';

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
                        <div>Hardware</div>
                        <div>Mobile</div>
                        <div>Operating Systems</div>
                        <div>Programming</div>
                        <div>Random</div>
                        <div>Security</div>
                        <div>Social</div>
                        <div>Software</div>
                        <div>Feedback</div>
                        <div>Support</div>
                    </div>
                    <div className="forum-post">
                        <div className="forum-post-top">
                            <div>New</div>
                            <div><button>Create Topic</button></div>
                        </div>
                        <div className="forum-post-topic">
                        <Topic />
                        </div>
                        <div className="forum-post-thread"> 
                            nting and typesetting industry. Lorem Ipsum has been t
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Forum;


