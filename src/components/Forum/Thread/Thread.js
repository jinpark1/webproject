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
        const threads = this.state.threads.map( v => {
            return (
                <div key={v.id}>
                    <div>{v.subject}</div>
                    <div>{v.created}</div>
                    <div></div>
                </div>
            )
        })
        return (
            <div className="thread">
                {threads}
            </div>
        );
    }
}

export default Thread;


