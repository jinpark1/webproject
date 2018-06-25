import React, { Component } from 'react';
import './Post.css';
import axios from 'axios';
import backGroundGrey from '../../../images/backgroundgrey3.jpg';
import Reply from './Reply/Reply';
import CreateReply from './CreateReply/CreateReply';
import { connect } from 'react-redux';

class Post extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            showing: false, 
            replys: [],
            loggedIn: false, 
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
        if(this.props.userData.email){
            this.setState({
                loggedIn: true,
            })
        }
        if(!this.props.userData.email){
            this.setState({
                loggedIn: false,
            })
        }
    }

    // componentWillReceiveProps(nextProps){
    //     console.log('nextProps-------', nextProps)
    //     if(nextProps.userData.email){
    //         this.setState({
    //             loggedIn: true,
    //         })
    //     }
    //     if(!nextProps.userData.email){
    //         this.setState({
    //             loggedIn: false,
    //         })
    //     }
    // }

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
        console.log('Post-----props', this.props)
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
                    <div className="post-container">
                        {/* <div className="forum-post-top">
                            <div>{post.category}</div>
                        </div> */}
                        <div className="forum-post-topic">
                        </div>
                        <div className="post-thread"> 
                            <div className="post-thread-top">
                                <div className="post-id">{post.thread_id}</div>
                                <div className="post-created-category">
                                    <div className="post-created">{post.created}</div>
                                    <div className="post-created">{post.category}</div>
                                </div>
                            </div>
                            <div className="post-online-id">{post.online_id}</div>
                            <div className="post-subject">{post.subject}</div>
                            <div className="post-content"><div dangerouslySetInnerHTML={{__html: post.content}}></div></div>
                            <div>
                                { this.state.loggedIn ? <button onClick={ () => this.createReply() }>Reply</button> : null}
                            </div>
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

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Post);


