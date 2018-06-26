import React, { Component } from 'react';
import './Reply.css';

export default class ReactChild extends Component {
    render() {
        const reply = this.props.replys
        const replys = reply.map( (v, i) => {
            return (
                <div key={i} className="reply-container">
                    <div className="reply-container-right">
                        <div className="reply-created">{v.created}</div>
                        <div className="reply-created">{v.category}</div>
                    </div>
                    <div className="reply-container-left">
                        <div className="reply-onlineID">{v.online_id}</div>
                        <div className="reply-content">{v.post_content}</div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {replys}
            </div>
        )
    }
}