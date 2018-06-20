import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';
import backGroundGrey from '../../../images/backgroundgrey3.jpg';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
      
        axios.get(`/api/post/${ this.props.match.params.id }`).then( res => {
            console.log('---post---Res', res)
            this.setState({
                posts: res.data
            })          
        })
    }

    render() {
        const hi = this.state.posts[0] ? this.state.posts[0] : 'loading..'
        console.log('post----5', hi)
        console.log('post----6', hi.category)

        return (
            <div className="post">
                <div className="forum">
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
                            <div>Hello There</div>
                        </div>
                        <div className="forum-post-topic">
                            {/* <div style={{ display: (showing ? 'flex' : 'none')}}><Topic toggle={this.createTopic} /></div> */}
                        </div>
                        <div className="forum-post-thread"> 
                            <div>{hi.online_id}</div>
                            <div>{hi.category}</div>
                            <div>{hi.subject}</div>
                            <div>{hi.content}</div>
                            <div>{hi.created}</div>
                        </div>
                    </div>
                </div>    
            </div>
            </div>
        );
    }
}

export default Post;


