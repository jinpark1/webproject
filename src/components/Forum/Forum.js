import React, { Component } from 'react';
import './Forum.css';
import backGroundGrey from '../../images/backgroundgrey3.jpg';
import Topic from './Topic/Topic';

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
        const { showing } = this.state;
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
                            <div><button onClick={ () => this.createTopic() }>Create Topic</button></div>
                        </div>
                        <div className="forum-post-topic">
                            <div style={{ display: (showing ? 'flex' : 'none')}}><Topic /></div>
                        </div>
                        <div className="forum-post-thread"> 
                            nting and typesetting industry. Lorem Ipsum has been t
                        </div>
                        {/* <div className="forum-post-pagination">
                            <pagination defaultCurrent={1} total={50} />
                        </div> */}
                    </div>
                </div>    
            </div>
        );
    }
}

export default Forum;


