import React, { Component } from 'react';
import './Reply.css';
import ReplyChild from './ReplyChild';
import { withData } from './MyComponentThatFetchesData';

class Reply extends Component {
    constructor(){
        super();

        this.state = {
            reply: []
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newReply.length > this.state.reply.length){
            this.setState({
                reply: nextProps.newReply
            })
        }
    }

    render() {
        return (
            <div className="reply">
                <ReplyChild idpass={this.props.id} newReply={this.state.reply} />
            </div>
        );
    }
}

export default Reply;
