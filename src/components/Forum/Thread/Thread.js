import React, { Component } from 'react';
import './Thread.css';
import axios from 'axios';

class Thread extends Component {
    constructor(){
        super();

        this.state = {
            threads: []
        }
    }

    componentDidMount() {
        axios.get('/api/threads').then( res => {
            console.log('---Thread---Res', res)
            this.setState({
                threads: res.data
            })          
        })
    }

    render() {
        console.log('------Thread',this.state.threads)
        const time = this.state.threads

        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <div className="thread-list" key={i}>
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-category">{v.category}</div>
                        <div className="thread-list-created">{v.created}</div>
                    </div>
                </div>
            )
        }) : null;

        return (
            <div className="thread">
                {threads}
            </div>
        );
    }
}

export default Thread;


