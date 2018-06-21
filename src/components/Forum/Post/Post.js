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
            reply: []
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

        axios.get(`/api/reply/${ this.props.match.params.id }`).then( res => {
            console.log('--post--reply5-----', res)
            this.setState({
                reply: res.data
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
        const reply = this.state.reply ? this.state.reply : 'loading..'
        console.log('post----5', post)
        console.log('post----6', post.category)
        console.log('reply----5', reply)
        console.log('reply----6', reply.category)
        const replys = reply.map( (v, i) => {
            return (
                <div className="reply-container">
                    <div>{v.content}</div>
                    <div>{v.created}</div>
                    <div>{v.online_id}</div>
                    <div></div>
                </div>
            )
        })


        // const threads = this.state.threads ? this.state.threads.map( (v, i) => {
        //     return (
        //         <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
        //             <div className="thread-list-left">
        //                 <div className="thread-list-subject">{v.subject}</div>
        //                 <div className="thread-list-id">{v.online_id}</div>
        //             </div>
        //             <div className="thread-list-right">
        //                 <div className="thread-list-category">{v.category}</div>
        //                 <div className="thread-list-created">{v.created}</div>
        //                 <div className="thread-list-created">{v.thread_id}</div>
        //             </div>
        //         </Link>
        //     )
        // }) : null; 

        
        
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
                        <div>Operating Systems</div>
                        <div>Programming</div>
                        <div>Random</div>
                        <div>Security</div>
                        <div>Social</div>
                        <div>Software</div>
                        <div>Feedback</div>
                        <div>Support</div>
                    </div>
                    <div className="post-container">
                        <div className="forum-post-top">
                            <div>{post.category}</div>
                            <div><button onClick={ () => this.createPost() }>Reply</button></div>
                        </div>
                        <div className="forum-post-topic">
                            {/* <div style={{ display: (this.state.showing ? 'flex' : 'none')}}><Topic toggle={this.createPost} /></div> */}
                        </div>
                        <div className="post-thread"> 
                            <div className="post-id">{post.id}</div>
                            <div className="post-thread-top">
                                <div className="post-online-id">{post.online_id}</div>
                                <div className="post-created">{post.created}</div>
                            </div>
                            <div className="post-subject">{post.subject}</div>
                            <div className="post-content">{post.content}</div>
                            <div><button>Reply</button></div>
                        </div>
                        <div className="post-reply">
                            hello
                            {reply.content}
                            {replys}
                        </div>
                    </div>
                </div>    
            </div>
            </div>
        );
    }
}

export default Post;


