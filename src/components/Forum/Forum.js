import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';
import Topic from './Topic/Topic';
import Thread from './Thread/Thread';
import { Link } from 'react-router-dom';

class Forum extends Component {
    constructor(){
        super();

        this.state = {
            showing: false
        }
        
    }

    createTopic = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    render() {
        return (
            <div className="forum">
                <div className="forum-top">
                    <div>FORUMS</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
                <div className="forum-main">
                    <div className="forum-category">
                        <div onClick={() => this.createTopic()}>All Topics</div>
                        <div onClick={() => this.createTopic()}>General</div>
                        <div onClick={() => this.createTopic()}>Hardware</div>
                        <div onClick={() => this.createTopic()}>Mobile</div>
                        <div onClick={() => this.createTopic()}>OS</div>
                        <div onClick={() => this.createTopic()}>Code</div>
                        <div onClick={() => this.createTopic()}>Random</div>
                        <div onClick={() => this.createTopic()}>Security</div>
                        <div onClick={() => this.createTopic()}>Social</div>
                        <a href="/forum/software"><div>Software</div></a>
                        <a href="/forum/feedback"><div>Feedback</div></a>
                        <a href="/forum/support"><div>Support</div></a>
                    </div>
                    <div className="forum-post">
                        <div className="forum-post-top">
                            <div>New</div>
                            <div><button onClick={ () => this.createTopic() }>Create Topic</button></div>
                        </div>
                        <div className="forum-post-topic">
                            {/* <div style={{ display: (this.state.showing ? 'flex' : 'none')}}><Topic toggle={this.createTopic} /></div> */}
                            {this.state.showing && <Topic toggle={this.createTopic}/>}
                        </div>
                        <div className="forum-post-thread"> 
                            <Thread />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Forum;


