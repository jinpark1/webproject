import React, { Component } from 'react';
import './Thread.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SupportThread extends Component {
    constructor(){
        super();

        this.state = {
            threads: [],
            offset: 0,
            pageNum: 0,
        }
    }

    componentDidMount() {
        // Gets 20 items at a time 
        const id = this.state.offset * 20
       axios.get(`/api/threads/support/${id}`).then( res => {
           this.setState({
               threads: res.data,
               offset: this.state.offset + 1
           })
       }) 
    }

    updateLatest = () => {
        const id = (this.state.pageNum - 1) * 20
        console.log(this.state.offset,this.state.pageNum, id)
        axios.get(`/api/threads/support/${id}`).then( res => {
            this.setState({
                pageNum: this.state.pageNum - 1,
                offset: this.state.offset - 1,
                threads: res.data,
            })
        }) 
        window.scrollTo(0, 0)
    }

    updatePrevious = () => {
        const id = this.state.offset * 20
        axios.get(`/api/threads/support/${id}`).then( res => {
            this.setState({
                pageNum: this.state.pageNum + 1,
                offset: this.state.offset + 1,
                threads: res.data,
            })
        })
        window.scrollTo(0, 0)
    }

     render() {
        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-leftID">
                        <div className="thread-list-threadID">{v.thread_id}</div>
                    </div> 
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-created">{v.created}</div>
                        <div className="thread-list-category">{v.category}</div>
                    </div>
                </Link>
            )
        }) : null; 

        return (
            <div className="thread">    
                <div className="thread-show">
                    {threads}
                </div>
                <div className="thread-pagination">
                    { this.state.pageNum > 0 ? <button onClick={this.updateLatest} >Left Arrow</button> : <button disabled>Left Arrow</button> }
                    { this.state.threads.length === 20 ? <button className="thread-button-right" onClick={this.updatePrevious} >Right Arrow</button> : <button disabled>Right Arrow</button> }
                </div>
            </div>
        );
    }
}

export default SupportThread;


