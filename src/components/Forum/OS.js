import React, { Component } from 'react';
import './Forum.css';
import './OS.css';
// import backGroundGrey from '../../images/backgroundgrey3.jpg';
import osPhoto from '../../images/osphoto.jpg';
import Topic from './Topic/Topic';
// import OSThread from './Thread/OSThread';
import Thread from './Thread/Thread';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class OS extends Component {
    constructor(){
        super();

        this.state = {
            showing: false,
            loggedIn: false,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
            <div className="OS">
                <div className="OS-top">
                    <div>FORUMS Operating Systems</div>
                    <img src={osPhoto} alt="backGroundGrey" />
                </div>
                <div className="OS-main">
                    <div className="OS-category">
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
                    <div className="OS-post">
                        <div className="OS-post-top">
                            <div></div>
                            { !this.state.loggedIn ? <div></div> : <div><button onClick={ () => this.createTopic() }>Create Topic</button></div> }
                        </div>
                        <div className="OS-post-topic">
                            {this.state.showing && <Topic toggle={this.createTopic}/>}
                        </div>
                        <div className="OS-post-thread"> 
                            <Thread category="OS" />
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

export default connect(mapStateToProps)(OS);


