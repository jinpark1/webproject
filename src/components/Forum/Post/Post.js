import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';
import backGroundGrey from '../../../images/backgroundgrey3.jpg';
import Reply from './Reply/Reply';
import CreateReply from './CreateReply/CreateReply';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            showing: false,
            replys: []
        }
    }

    componentDidMount() {
        // let id = this.props.match.params.id
      
        axios.get(`/api/post/${ this.props.match.params.id }`).then( res => {
            console.log('---post---Res', res)
            this.setState({
                posts: res.data
            })          
        })
        console.log('Post--------compdidmount')
    }

    createReply = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    updateReplyPosts = (val) => {
        console.log('post---------update', val)
        this.setState({
            replys: val
        })
    }

    render() {
        const post = this.state.posts[0] ? this.state.posts[0] : 'loading..'
  
        // console.log('post----5', post)
        // console.log('post----6', post.category)
        console.log('replys from post comp', this.state.replys)

        
        
        return (
            <div className="post">
                <div className="forum">
                <div className="forum-top">
                    <div>FORUMS {post.category}</div>
                    <img src={backGroundGrey} alt="backGroundGrey" />
                </div>
                <div className="forum-main">
                    <div className="forum-category">
                        <div>All Topics</div>
                        <div>General</div>
                        <div>Hardware</div>
                        <div>Mobile</div>
                        <div>OS</div>
                        <div>Code</div>
                        <div>Random</div>
                        <div>Security</div>
                        <div>Social</div>
                        <div>Software</div>
                        <div>Feedback</div>
                        <div>Support</div>
                    </div>
                    <div className="post-container">
                        {/* <div className="forum-post-top">
                            <div>{post.category}</div>
                        </div> */}
                        <div className="forum-post-topic">
                        </div>
                        <div className="post-thread"> 
                            <div className="post-thread-top">
                                <div className="post-id">{post.thread_id}</div>
                                <div className="post-created">{post.created}</div>
                                {/* <div className="post-created">{post.category}</div> */}
                            </div>
                            <div className="post-online-id">{post.online_id}</div>
                            <div className="post-subject">{post.subject}</div>
                            <div className="post-content">{post.content}</div>
                            <div><button onClick={ () => this.createReply() }>Reply</button></div>
                        </div>
                        <div >
                            {this.state.showing && <CreateReply getReply={ this.updateReplyPosts } id={ this.props.match.params.id} toggle={ this.createReply } />}
                        </div>
                        <div className="post-reply">
                            <Reply newReply={ this.state.replys } id={ this.props.match.params.id } />
                        </div>
                    </div>
                </div>    
            </div>
            </div>
        );
    }
}

export default Post;


