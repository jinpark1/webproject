import React, { Component } from 'react';
import './Thread.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Thread extends Component {
    constructor(){
        super();

        this.state = {
            threads: [],
            offset: 0,
            pageNum: 0,
        }
    }

    componentDidMount() {
        // Gets 10 items at a time 
        const id = this.state.offset * 10
       axios.get(`/api/threads/${id}`).then( res => {
           this.setState({
               threads: res.data,
               offset: this.state.offset + 1
           })
       }) 
    }

    updateLatest = () => {
        const id = (this.state.pageNum - 1) * 10
        console.log(this.state.offset,this.state.pageNum, id)
        axios.get(`/api/threads/${id}`).then( res => {
            this.setState({
                pageNum: this.state.pageNum - 1,
                offset: this.state.offset - 1,
                threads: res.data,
            })
        }) 
        window.scrollTo(0, 0)
    }

    updatePrevious = () => {
        const id = this.state.offset * 10
        axios.get(`/api/threads/${id}`).then( res => {
            this.setState({
                pageNum: this.state.pageNum + 1,
                offset: this.state.offset + 1,
                threads: res.data,
            })
        })
        window.scrollTo(0, 0)
    }

    render() {
        console.log('------Thread',this.state.threads)
        console.log('------Thread---offset',this.state.offset)
        console.log('------Thread---page',this.state.pageNum)

        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-category">{v.category}</div>
                        <div className="thread-list-created">{v.created}</div>
                        <div className="thread-list-created">{v.thread_id}</div>
                    </div>
                </Link>
            )
        }) : null; 

        console.log('------Thread',this.state.threads.length)
        return (
            <div className="thread">
                <div className="thread-show">
                    {threads}
                </div>
                <div className="thread-pagination">
                    { this.state.pageNum > 0 ? <button onClick={this.updateLatest} >Latest</button> : null }
                    { this.state.threads.length === 10 ? <button className="thread-button-right" onClick={this.updatePrevious} >Previous</button> : null }
                </div>
            </div>
        );
    }
}

export default Thread;


