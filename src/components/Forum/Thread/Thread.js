import React, { Component } from 'react';
import './Thread.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa'

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
        const category = this.props.category
        // Gets 20 items at a time 
        const id = this.state.offset * 20

        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                this.setState({
                    threads: res.data,
                    offset: this.state.offset + 1
                })
            })
        } else {
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                this.setState({
                    threads: res.data,
                    offset: this.state.offset + 1
                })
            })
        }
    }


    updateLatest = () => {
        const category = this.props.category;
        const id = (this.state.pageNum - 1) * 20
        
        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum - 1,
                    offset: this.state.offset - 1,
                    threads: res.data,
                })
            }) 
            window.scrollTo(0, 0)
        } else {
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum - 1,
                    offset: this.state.offset - 1,
                    threads: res.data,
                })
            }) 
            window.scrollTo(0, 0)
        }
    }

    updatePrevious = () => {
        const category = this.props.category;
        const id = this.state.offset * 20

        if(category === 'All'){
            axios.get(`/api/threads/${id}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum + 1,
                    offset: this.state.offset + 1,
                    threads: res.data,
                })
            })
            window.scrollTo(0, 0)
        } else {
            axios.get(`/api/threads/${id}/${category}`).then( res => {
                this.setState({
                    pageNum: this.state.pageNum + 1,
                    offset: this.state.offset + 1,
                    threads: res.data,
                })
            })
            window.scrollTo(0, 0)
        }
    }

    test = (a, b) => {
        return a + b;
    }

    displayDate = (index) => {
        let date = this.state.threads.map((e, i) => {
            if (index === i) {
                return e.thread_created;
            }
        })
        return date[index] ? date[index].split('').slice(0, 10).join('') : 'Failed to get Date'
    }

    displayTime = (index) => {
        let time = this.state.threads.map((e, i) => {
            if (index === i) {
                return e.thread_created;
            }
        })
        return time[index] ? time[index].split('').map((e, i) => {
            if (e === '-') {
                return time[index].split('').slice(i+1)
            }
        }) : 'Failed to get time'
    }

    render() {
        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-leftID">
                        <div className="thread-list-threadID">
                            <div className="thread-list-threadID-child"># {v.thread_id}</div>
                        </div>
                        <img className="thread-list-photo" src={v.profile_photo} />
                    </div> 
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-category">{v.category}</div>
                        <div className="thread-list-created">{this.displayDate(i)}</div>
                        <div className="thread-list-created">{this.displayTime(i)}</div>
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
                    { this.state.pageNum > 0 ? <FontAwesome.FaArrowCircleOLeft className="thread-button-left" onClick={this.updateLatest} /> : <FontAwesome.FaArrowCircleOLeft className="thread-button-left" /> }
                    { this.state.threads.length === 20 ? <FontAwesome.FaArrowCircleORight className="thread-button-right" onClick={this.updatePrevious} /> : <FontAwesome.FaArrowCircleORight disabled className="thread-button-right" /> }
                </div>
            </div>
        );
    }
}

export default Thread;


