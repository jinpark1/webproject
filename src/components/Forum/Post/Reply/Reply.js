import React, { Component } from 'react';
import './Reply.css';
import axios from 'axios';
import ReplyChild from './ReplyChild';
import MyComponentThatFetchesData from  './MyComponentThatFetchesData';
import { withData } from './MyComponentThatFetchesData';

class Reply extends Component {
    constructor(){
        super();

        this.state = {
            reply: []
        }
    }
    // Testing, this one works...
    // componentDidMount() {
    //     console.log('Reply---', this.props.id)
    //     axios.get(`/api/reply/${ this.props.id }`).then( res => {
    //         console.log('--post--reply5-----', res)
    //         this.setState({
    //             reply: res.data
    //         })
    //     })
    // }

    //Testing.. this one is for test, use the one above.
    // componentDidMount() {
    //     axios.get(`/api/reply/49`).then( res => {
    //         console.log('--post--reply5-----', res)
    //         this.setState({
    //             reply: res.data
    //         })
    //     })
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps.newReply.length > this.state.reply.length){
            this.setState({
                reply: nextProps.newReply
            })
        }
    }

    render() {
        // const reply = this.state.reply ? this.state.reply : 'loading..'
        // console.log('reply----5', reply)
        // console.log('reply----6', reply.category)
        // const replys = reply.map( (v, i) => {
        //     return (
        //         <div key={i} className="reply-container">
        //             <div className="reply-container-right">
        //                 <div className="reply-created">{v.created}</div>
        //                 <div className="reply-created">{v.category}</div>
        //             </div>
        //             <div className="reply-container-left">
        //                 <div className="reply-onlineID">{v.online_id}</div>
        //                 <div className="reply-content">{v.post_content}</div>
        //             </div>
        //         </div>
        //     )
        // })
                
        return (
            <div className="reply">
                {/* <div>{replys}</div> */}
                {/* <ReplyChild replys={reply} /> */}
                <ReplyChild idpass={this.props.id} newReply={this.state.reply} />
            </div>
        );
    }
}

export default Reply;
