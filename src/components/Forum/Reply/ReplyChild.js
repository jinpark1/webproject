import React, { Component } from 'react';
import './Reply.css';
import { withData } from './MyComponentThatFetchesData';

class ReplyChild extends Component {
    render() {
        console.log('replychild---------',this.props.reply)
        console.log('replychild---------props',this.props)
        console.log('replychild---------props',this.props.idpass)
        const reply = this.props.reply
        const replys = reply.map( (v, i) => {
            return (
                <div key={i} className="reply-container">
                    <div className="reply-container-right">
                        <div className="reply-created">{v.post_created}</div>
                        <div className="reply-created">{v.category}</div>
                    </div>
                    <div className="reply-container-left">
                        <div className="reply-onlineID">{v.online_id}</div>
                        <div className="reply-content" dangerouslySetInnerHTML={{__html: v.post_content}}></div>
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

// export default withData(`/api/reply/${this.props.idpass}`)(ReplyChild)
export default withData(`/api/reply/`)(ReplyChild)