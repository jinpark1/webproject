import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/social3.jpg';
import Topic from './Topic/Topic';
import SocialThread from './Thread/SocialThread';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Social extends Component {
    constructor(){
        super();

        this.state = {
            showing: false,
            loggedIn: false,
        }
    }

    createTopic = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.userData.email){
            this.setState({
                loggedIn: true,
            })
        }

        if(!nextProps.userData.email){
            this.setState({
                loggedIn: false,
            })
        }
    }

    render() {
        return (
            <div className="forum">
                <div className="forum-top">
                    <div>FORUMS Social</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
                <div className="forum-main">
                    <div className="forum-category">
                        <a href="/forum"><div>All Topics</div></a>
                        <a href="/forum/general"><div>General</div></a>
                        <a href="/forum/hardware"><div>Hardware</div></a>
                        <a href="/forum/mobile"><div>Mobile</div></a>
                        <a href="/forum/os"><div>OS</div></a>
                        <a href="/forum/programming"><div>Code</div></a>
                        <a href="/forum/random"><div>Random</div></a>
                        <a href="/forum/security"><div>Security</div></a>
                        <a href="/forum/social"><div>Social</div></a>
                        <a href="/forum/software"><div>Software</div></a>
                        <a href="/forum/feedback"><div>Feedback</div></a>
                        <a href="/forum/support"><div>Support</div></a>
                    </div>
                    <div className="forum-post">
                        <div className="forum-post-top">
                            <div></div>
                            { !this.state.loggedIn ? <div></div> : <div><button onClick={ () => this.createTopic() }>Create Topic</button></div> }
                        </div>
                        <div className="forum-post-topic">
                            {this.state.showing && <Topic toggle={this.createTopic}/>}
                        </div>
                        <div className="forum-post-thread"> 
                            <SocialThread />
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Social);


