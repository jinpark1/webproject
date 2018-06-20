import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';
import backGroundGrey from '../../../images/backgroundgrey3.jpg';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            showing: false,
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

    createPost = () => {
        this.setState({
            showing: !this.state.showing
        })
    }

    render() {
        const post = this.state.posts[0] ? this.state.posts[0] : 'loading..'
        console.log('post----5', post)
        console.log('post----6', post.category)

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
                            <div>{post.category}</div>
                            <div><button onClick={ () => this.createPost() }>Reply</button></div>
                        </div>
                        <div className="forum-post-topic">
                            {/* <div style={{ display: (this.state.showing ? 'flex' : 'none')}}><Topic toggle={this.createPost} /></div> */}
                        </div>
                        <div className="post-thread"> 
                            <div className="post-thread-top">
                                <div className="post-id">{post.online_id}</div>
                                <div className="post-created">{post.created}</div>
                            </div>
                            <div className="post-subject">{post.subject}</div>
                            <div className="post-content">{post.content}</div>
                        </div>
                    </div>
                </div>    
            </div>
            </div>
        );
    }
}

export default Post;


