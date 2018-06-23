import React, { Component } from 'react';
import './Reply.css';
import axios from 'axios';

class Reply extends Component {
    constructor(){
        super();

        this.state = {
            reply: []
        }
    }

    componentDidMount() {
        console.log('Reply---', this.props.id)
        axios.get(`/api/reply/${ this.props.id }`).then( res => {
            console.log('--post--reply5-----', res)
            this.setState({
                reply: res.data
            })
        })
    }

    componentWillReceiveProps(nextProps){
        console.log('Reply--------props', nextProps)
        console.log('Reply--------props2', nextProps.newReply)
        if(nextProps.newReply.length > this.state.reply.length){
            this.setState({
                reply: nextProps.newReply
            })
        }
    }

    render() {
        const reply = this.state.reply ? this.state.reply : 'loading..'
        // console.log('reply----5', reply)
        // console.log('reply----6', reply.category)
        const replys = reply.map( (v, i) => {
            return (
                <div key={i} className="reply-container">
                    <div className="reply-container-right">
                        <div className="reply-created">{v.created}</div>
                    </div>
                    <div className="reply-container-left">
                        <div className="reply-onlineID">{v.online_id}</div>
                        <div className="reply-content">{v.post_content}</div>
                    </div>
                </div>
            )
        })
                
        return (
            <div className="reply">
                <div>{replys}</div>
            </div>
        );
    }
}

export default Reply;
